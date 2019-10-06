function downloadFile(url,download)
{
    console.log("Download Starts");
    setTimeout(function()
    {
        let fileName=url.split('/').pop();
        download(fileName);
    },3000)
}

function compressFile(fileName,compress)
{
    console.log('Compression Starts');
  
    setTimeout(function()
    {
        let compress_file_name=fileName.split('.')[0]+'.zip';
        compress(fileName);
    },3000)
}

function uploadFile(compress_file_name,upload)
{
    console.log('Uploading Started');
    setTimeout(function()
    {
        let upload_path='http://abc.com/'+compress_file_name;
        upload(upload_path);
    },3000)
}

downloadFile('http://example.com/file.mp4',
    function(fileName)
    {
        console.log("Completed"+fileName);
        compressFile(fileName,
        function(compress_file_name)
        {
            console.log('Compression Completed'+compress_file_name);
            uploadFile(compress_file_name,
            function(upload_path)
            {
                console.log('Upload Completed at -->'+upload_path);
            })
        })
    });