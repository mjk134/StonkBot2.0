module.exports = (req, res) => {
  try {
	console.log("** Uploaded file ", req.file.filename);
    res.json({'message': 'File uploaded successfully',
      'result': true,
      fileName: req.file.filename,
      path: '/uploads/' +  req.file.filename,
      url: `http://${host}:${port}/uploads/${req.file.filename}`
    });
  } catch (ex) {
    console.log(ex.toString());
    res.send("Failed to upload file");
  }
};
