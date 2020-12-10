import { CATEGORY } from './courseType'

export const category = (selected_course_list) => {
    return {
        type : CATEGORY,
        payload : selected_course_list
    }
}