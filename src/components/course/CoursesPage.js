import React, { PropTypes } from 'react';

class CoursesPage extends React.Component {
  constructor(props, context) {
      super(props, context);

      this.state = {
        course: { title: "" }
      };

      this.onTitleChange = this.onTitleChange.bind(this);
      this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course});
  }

  onClickSave() {
    alert(`Saving ${this.state.course.title}`);
  }

  render() {
    return (
      <div>
        <h1>Courses</h1>
        <p>Available Pluralsight courses.</p>

        <h2>Add Course</h2>
        <input
          type="text"
          value={this.state.course.title}
          onChange={this.onTitleChange} />

        <input
          type="submit"
          value="Save"
          onClick={this.onClickSave} />

      </div>
    );
  }
}

export default CoursesPage;
