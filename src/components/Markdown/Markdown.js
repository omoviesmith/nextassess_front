import { Editor } from '@tinymce/tinymce-react';

export default function Markdown({ value, setValue, placeholder }) {
    return (
        <Editor
            apiKey='q4ctmfpax5jsjpa2wn7qc7wdvvq58jw7xwez5bizhdnp8e6x'
            onEditorChange={setValue} 
            value={value} 
            init={{
                placeholder:`${placeholder}`,
                height:300,
                plugins:['wordcount', 'lists'],
                toolbar: 'undo redo | styles | ' +
                    'bold italic | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'removeformat',
                menubar: false
            }} 
        />
    )
}