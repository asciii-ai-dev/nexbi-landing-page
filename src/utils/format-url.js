export const formatUrl = (inputUrl) => {
    try {
        // Add a scheme if missing
        let url = new URL(inputUrl.includes("://") ? inputUrl : `https://${inputUrl}`);
    
        // Remove any trailing slashes except for the root path
        url.pathname = url.pathname === "/" ? "/" : url.pathname.replace(/\/+$/, "");
    
        // Return the correctly formatted URL
        return url.href;
      } catch (error) {
        // Handle invalid URLs gracefully
        console.error("Invalid input URL. Please provide a valid domain.");
        return null; // Or return a fallback URL like 'https://www.example.com'
      }
  }
  