tinymce.init({
  selector: '.form-wysiwyg',
  height: "100%",
  menubar: false,
  branding: false,
  statusbar: false,
  plugins: [
    'a11ychecker','advlist','advcode','advtable','autolink','checklist','export',
    'lists','link','image','charmap','preview','anchor','searchreplace','visualblocks',
    'powerpaste','fullscreen','formatpainter','insertdatetime','media','table','help','wordcount'
  ],
  toolbar: 'bold italic underline bullist alignjustify alignleft alignright forecolor',

});
