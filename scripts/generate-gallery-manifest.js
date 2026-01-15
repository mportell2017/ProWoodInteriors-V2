const fs = require('fs');
const path = require('path');

// Configuration
const GALLERY_ROOT = path.join(__dirname, '..', 'public', 'images', 'gallery');
const OUTPUT_FILE = path.join(__dirname, '..', 'lib', 'gallery-manifest.ts');

// Category mapping
const CATEGORY_MAP = {
  'Bedroom': { name: 'Bedrooms', order: 2 },
  'Bookcases': { name: 'Bookcases', order: 4 },
  'Entertainment Centers': { name: 'Entertainment Centers', order: 3 },
  'kitchen remodel': { name: 'Kitchens', order: 1 }
};

// Kitchen project subfolder mapping
const KITCHEN_PROJECTS = {
  'Blue Island': 'Blue Island Kitchen',
  'Darkwood': 'Darkwood Kitchen',
  'Dual Color': 'Dual-Color Kitchen',
  'Kitchen Cabinet Refacing': 'Kitchen Cabinet Refacing',
  'Quartzite Remodel': 'Quartzite Luxury Kitchen',
  'Vintage Kitchen': 'Vintage Kitchen',
  'White Cabinets': 'White Cabinet Kitchen'
};

// Valid image extensions
const VALID_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.avif'];

/**
 * Check if a file is a valid image
 */
function isValidImage(filename) {
  const ext = path.extname(filename).toLowerCase();
  return VALID_EXTENSIONS.includes(ext);
}

/**
 * Generate alt text from filename and context (Enhanced for SEO)
 */
function generateAltText(filename, category, project) {
  // Remove extension and clean up filename
  let text = path.basename(filename, path.extname(filename));

  // Replace hyphens and underscores with spaces
  text = text.replace(/[-_]/g, ' ');

  // Remove numbered suffixes like "01", "02", etc.
  text = text.replace(/\s+\d+$/g, '');

  // Trim extra spaces
  text = text.trim();

  // Enhanced category-specific descriptions for SEO
  const categoryDescriptions = {
    'Kitchens': {
      prefix: 'Custom kitchen remodel featuring',
      suffix: 'by Professional Wood Interiors'
    },
    'Bedrooms': {
      prefix: 'Custom bedroom built-in cabinetry with',
      suffix: 'by Professional Wood Interiors'
    },
    'Entertainment Centers': {
      prefix: 'Custom entertainment center and media cabinet featuring',
      suffix: 'by Professional Wood Interiors'
    },
    'Bookcases': {
      prefix: 'Custom built-in bookcase with',
      suffix: 'by Professional Wood Interiors'
    }
  };

  const config = categoryDescriptions[category] || {
    prefix: 'Custom woodwork featuring',
    suffix: 'by Professional Wood Interiors'
  };

  // Build descriptive alt text
  let altText;
  if (project) {
    altText = `${project} ${config.prefix} ${text} ${config.suffix}`;
  } else {
    altText = `${config.prefix} ${text} ${config.suffix}`;
  }

  // Add location for SEO if not already present
  if (!altText.includes('St. Louis') && !altText.includes('St Louis')) {
    altText += ' - St. Louis, MO';
  }

  return altText;
}

/**
 * Recursively scan directory and collect images
 */
function scanDirectory(dirPath, category, project = null) {
  const images = [];

  try {
    const items = fs.readdirSync(dirPath);

    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        // If we're in kitchen remodel, this is a project subfolder
        if (category === 'Kitchens' && !project) {
          const projectName = KITCHEN_PROJECTS[item] || item;
          images.push(...scanDirectory(fullPath, category, projectName));
        }
      } else if (stat.isFile() && isValidImage(item)) {
        // Calculate relative path from public directory
        const relativePath = fullPath.split('public')[1].replace(/\\/g, '/');

        images.push({
          src: relativePath,
          alt: generateAltText(item, category, project),
          category: category,
          project: project,
          fileName: item
        });
      }
    }
  } catch (error) {
    console.warn(`⚠️  Warning: Could not read directory ${dirPath}:`, error.message);
  }

  return images;
}

/**
 * Main function to generate gallery manifest
 */
function generateGalleryManifest() {
  console.log('🎨 Generating gallery manifest...\n');

  // Validate gallery directory exists
  if (!fs.existsSync(GALLERY_ROOT)) {
    console.error('❌ Error: Gallery directory not found at', GALLERY_ROOT);
    process.exit(1);
  }

  const allImages = [];
  const categoriesData = {};

  try {
    // Read top-level directories
    const categoryDirs = fs.readdirSync(GALLERY_ROOT);

    for (const categoryDir of categoryDirs) {
      const categoryPath = path.join(GALLERY_ROOT, categoryDir);
      const stat = fs.statSync(categoryPath);

      // Skip if not a directory
      if (!stat.isDirectory()) {
        // Check if it's a loose image file
        if (isValidImage(categoryDir)) {
          console.warn(`⚠️  Warning: Found loose image file: ${categoryDir}`);
          // Try to categorize it (assume Bookcases based on current structure)
          const relativePath = `/images/gallery/${categoryDir}`;
          allImages.push({
            src: relativePath,
            alt: generateAltText(categoryDir, 'Bookcases', null),
            category: 'Bookcases',
            project: null,
            fileName: categoryDir
          });
        }
        continue;
      }

      // Map directory name to category
      const categoryConfig = CATEGORY_MAP[categoryDir];
      if (!categoryConfig) {
        console.warn(`⚠️  Warning: Unknown category directory: ${categoryDir}`);
        continue;
      }

      const categoryName = categoryConfig.name;
      console.log(`📁 Scanning ${categoryName}...`);

      // Scan this category
      const categoryImages = scanDirectory(categoryPath, categoryName);
      allImages.push(...categoryImages);

      // Store category data
      if (!categoriesData[categoryName]) {
        categoriesData[categoryName] = {
          name: categoryName,
          order: categoryConfig.order,
          count: 0,
          heroImage: null
        };
      }

      categoriesData[categoryName].count += categoryImages.length;

      // Set hero image (first image alphabetically)
      if (!categoriesData[categoryName].heroImage && categoryImages.length > 0) {
        const sortedImages = [...categoryImages].sort((a, b) =>
          a.fileName.localeCompare(b.fileName)
        );
        categoriesData[categoryName].heroImage = sortedImages[0].src;
      }

      console.log(`   ✓ Found ${categoryImages.length} images`);
    }

    // Convert categories object to sorted array
    const categories = Object.values(categoriesData)
      .sort((a, b) => a.order - b.order)
      .map(({ name, count, heroImage }) => ({ name, count, heroImage }));

    // Generate TypeScript manifest
    const manifest = {
      images: allImages,
      categories: categories,
      totalImages: allImages.length,
      generatedAt: new Date().toISOString()
    };

    // Generate TypeScript file content
    const tsContent = `/**
 * Gallery Manifest
 *
 * Auto-generated file containing all gallery images and metadata.
 * DO NOT EDIT THIS FILE MANUALLY.
 *
 * Generated: ${manifest.generatedAt}
 * Total Images: ${manifest.totalImages}
 */

export interface GalleryImage {
  src: string;
  alt: string;
  category: string;
  project?: string | null;
  fileName: string;
}

export interface GalleryCategory {
  name: string;
  count: number;
  heroImage: string;
}

export interface GalleryManifest {
  images: GalleryImage[];
  categories: GalleryCategory[];
  totalImages: number;
  generatedAt: string;
}

export const galleryManifest: GalleryManifest = ${JSON.stringify(manifest, null, 2)};

export default galleryManifest;
`;

    // Ensure lib directory exists
    const libDir = path.dirname(OUTPUT_FILE);
    if (!fs.existsSync(libDir)) {
      fs.mkdirSync(libDir, { recursive: true });
    }

    // Write manifest file
    fs.writeFileSync(OUTPUT_FILE, tsContent, 'utf8');

    console.log('\n✅ Gallery manifest generated successfully!\n');
    console.log('📊 Summary:');
    console.log(`   Total images: ${manifest.totalImages}`);
    console.log(`   Categories: ${manifest.categories.length}`);
    categories.forEach(cat => {
      console.log(`      - ${cat.name}: ${cat.count} images`);
    });
    console.log(`\n💾 Output: ${OUTPUT_FILE}\n`);

  } catch (error) {
    console.error('❌ Error generating gallery manifest:', error);
    process.exit(1);
  }
}

// Run the script
generateGalleryManifest();
