import { CATEGORY, NEW_COURSE } from './courseType'

export const category = (selected_course_list) => {
    return {
        type : CATEGORY,
        payload : selected_course_list
    }
}

export const addNewCourse = (new_course) => {
    return {
        type : NEW_COURSE,
        payload : new_course
    }
}
