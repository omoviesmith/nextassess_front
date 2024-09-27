import { Editor } from '@tinymce/tinymce-react';

export default function Markdown({ value, setValue, placeholder }) {
    return (
        <Editor
            apiKey='ti6tpvrchol6izlpuf6caf2whwphwhe9tkshdy5dwbc9y8zp'
            onEditorChange={setValue} 
            value={value} 
            init={{
                placeholder:`${placeholder}`,
                height:300,
                plugins:['wordcount', 'lists'],
                toolbar: 'bold italic | bullist numlist outdent indent | undo redo | styles | ' +
                    'alignleft aligncenter alignright alignjustify | ' + 'removeformat',
                menubar: false
            }} 
        />
    )
}