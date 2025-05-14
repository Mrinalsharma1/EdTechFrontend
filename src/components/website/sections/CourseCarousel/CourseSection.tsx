import SectionLayout from '../../layouts/SectionLayout'
import CourseCarousel from './CourseCarousel'
import { categorizedCourses } from './data'

const CourseSection = () => {


    return (
     <SectionLayout>
        <CourseCarousel title="top courses" courses={categorizedCourses.popular}/>
    </SectionLayout>
  )
}

export default CourseSection