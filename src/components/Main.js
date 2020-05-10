import React from 'react';
import Lesson from './Lesson';

class Main extends React.Component{
    
    render(){
        const lessonItem = {
            name: 'HTML & CSS',
            image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg'
        }
        return(
            <Lesson 
                name={lessonItem.name}
                image={lessonItem.image}
            />
        )
    }
}

export default Main;