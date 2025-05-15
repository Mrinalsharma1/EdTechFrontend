import SectionLayout from '../../layouts/SectionLayout'
import CourseCarousel from './CourseCarousel'
import { categorizedCourses } from './data'

const CourseSection = () => {


    return (
     <SectionLayout>
        <CourseCarousel title="Most Popular on Udemy" courses={categorizedCourses.popular}/>
    </SectionLayout>
  )
}

export default CourseSection