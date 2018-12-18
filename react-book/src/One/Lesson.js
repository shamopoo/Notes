import React, { Component } from 'react';

const lessons = [
  { title: 'Lesson 1: title', description: 'Lesson 1: description' },
  { title: 'Lesson 2: title', description: 'Lesson 2: description' },
  { title: 'Lesson 3: title', description: 'Lesson 3: description' },
  { title: 'Lesson 4: title', description: 'Lesson 4: description' }
]


class Lesson extends Component {
  /* TODO */
  render () {
      const { lesson, index} = this.props
      return (
          <div onClick={() => console.log(index + '-' + lesson.title)}>
              <h1>{ lesson.title }</h1>
              <p>{ lesson.description }</p>
          </div>
      )
  }
}

class LessonsList extends Component {
    /* TODO */

    render () {
      return (
          <div>
             {lessons.map((lesson, i) => <Lesson key={i} index={i} lesson={lesson} />)}
          </div>
      )
    }
}

export default LessonsList