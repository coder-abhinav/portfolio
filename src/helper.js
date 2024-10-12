export const openLink = (link) => {
  let a = document.createElement("a");
  a.href = link;
  a.target = "_blank"; // Opens the link in a new tab (optional)
  a.rel = "noopener noreferrer"; // For security reasons when using target="_blank"
  a.click();
  a.remove(); // Clean up the element after the click
};

export const truncate = (str, num) => {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
};
