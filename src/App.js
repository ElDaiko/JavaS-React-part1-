//Functions---------------------------------------------------------------------------------------------------------------------

const Header = (props) => {
  return(
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
      <p>
      <strong>Total of exercises:</strong> {props.part1.exercises+props.part2.exercises+props.part3.exercises}
      </p>
    </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p>
        <strong>{props.part}: </strong>{props.exercises}
      </p>
    </div>
  )     
}

const Content = (props) => {
  return(
    <div>
      <Part part={props.part1.name} exercises={props.part1.exercises}/>
      <Part part={props.part2.name} exercises={props.part2.exercises}/>
      <Part part={props.part3.name} exercises={props.part2.exercises}/>
    </div>
  )
}

//Variables---------------------------------------------------------------------------------------------------------------------

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }


//Returns-----------------------------------------------------------------------------------------------------------------------

  return (
    <div>
      <Header 
      course={course} 
      />
      <Content 
      part1={part1}
      part2={part2}
      part3={part3}
      />
      <Total
      part1={part1}
      part2={part2}
      part3={part3}
      />
    </div>
    
  )
}

export default App