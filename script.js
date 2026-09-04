const path = require('path');

app.get('/LisoOffice.exe/download', (req, res) => {
    // Ensure 'LisoOffice.exe' is placed in the root or a 'public' folder
    const filePath = path.join(__dirname, 'LisoOffice.exe'); 
    
    res.download(filePath, 'LisoOffice.exe', (err) => {
        if (err) {
            console.error("Download error:", err);
            if (!res.headersSent) {
                res.status(404).send("File not found on server.");
            }
        }
    });
});
