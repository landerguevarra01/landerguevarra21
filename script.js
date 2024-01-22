function copyToClipboard(text) {
    // Create a temporary textarea element
    var textarea = document.createElement('textarea');
    textarea.value = text;

    // Append the textarea to the document
    document.body.appendChild(textarea);

    // Select and copy the text
    textarea.select();
    document.execCommand('copy');

    // Remove the textarea from the document
    document.body.removeChild(textarea);

    // Optionally, provide user feedback
    alert('Copied to clipboard: ' + text);
}