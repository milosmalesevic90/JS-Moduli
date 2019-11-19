import Students from '../components/students'
import Teachers from '../components/teachers'


class Content{
    constructor(){
        
    }
    getHtml(){
        const teachers=new Teachers();
        const students=new Students();
        let html='<div>';
        html+= students.getStudent();
        html+=teachers.getTeacher();
        html+='</div>'
        console.log('Init content');
        return html;
    }
}

export default Content;