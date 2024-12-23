export const slugify = (str) => {
    if (!str || typeof str !== 'string') {
      return '';  // Return an empty string if input is undefined or not a string
    }
    
    return str
      .toLowerCase()                   // Convert to lowercase
      .trim()                           // Remove leading/trailing spaces
      .replace(/[^\w\s-]/g, '')         // Remove all non-word characters (except dashes)
      .replace(/\s+/g, '-')             // Replace spaces with dashes
      .replace(/--+/g, '-')             // Replace multiple dashes with a single dash
      .replace(/[^\w-]+/g, '')          // Ensure no unwanted characters remain
      .replace(/^-+/, '')               // Remove leading dashes
      .replace(/-+$/, '');              // Remove trailing dashes
  };


