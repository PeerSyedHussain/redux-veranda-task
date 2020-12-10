import IBPS_Pic from '../../assets/img/ibps-exam.jpg'
import Economic from '../../assets/img/economic.jpg'
import FinanceMarket from '../../assets/img/finance-market.jpg'
import FinanceService from '../../assets/img/finance-service.jpg'
import Statistic from '../../assets/img/statistics.jpg'
import DataAnalysis from '../../assets/img/data-analysis.jpg'
import Accountant from '../../assets/img/accountant.jpg'
import GST from '../../assets/img/gst.jpg'
import MarketTrend from '../../assets/img/market-trend.jpg'
import Provider1 from '../../assets/img/provider1.jpg'
import { CATEGORY, NEW_COURSE } from '../course/courseType'

const initialState = {
    courses : [
        { 
            id : 1,
            dataCategory : "IBPS Exams",
            dataLevel : "Beginner",
            dataPrice : "Free",
            dataLanguage : "English,Tamil,Hindi",
            dataSort : "Popular",
            className : "course-box",
            firstChildClass : "course-img",
            img_url:IBPS_Pic,
            courseName : 'Veranda IBPS Exam Online Coaching Class I',
            courseDesc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            courseProviderName : 'David Warner',
            courseTotalLesson : 20,
            courseAvailableLang : 'English,Tamil,Hindi',
            courseProviderImg :  Provider1,
            dataCourseAmt : 7500,
        },
        { 
            id : 2,
            dataCategory : "Finance Services",
            dataLevel : "Intermediate",
            dataPrice : "Paid",
            dataLanguage : "English,Tamil,Hindi",
            dataSort : "Popular",
            className : "course-box",
            firstChildClass : "course-img",
            img_url:FinanceService,
            courseName : 'Veranda Finance service Class',
            courseDesc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            courseProviderName : 'David Warner',
            courseTotalLesson : 18,
            courseAvailableLang : 'English,Tamil,Hindi',
            courseProviderImg :  Provider1,
            dataCourseAmt : 5500,
        },
        { 
            id : 3,
            dataCategory : "Finance Markets",
            dataLevel : "Expert",
            dataPrice : "Free",
            dataLanguage : "English,Tamil,Hindi,Malayalam",
            dataSort : "Popular",
            className : "course-box",
            firstChildClass : "course-img",
            img_url:FinanceMarket,
            courseName : 'Veranda Finance Market Online Class',
            courseDesc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            courseProviderName : 'David Warner',
            courseTotalLesson : 25,
            courseAvailableLang : 'English,Tamil,Hindi,Malayalam',
            courseProviderImg :  Provider1,
            dataCourseAmt : 5500,
        },
        { 
            id : 4,
            dataCategory : "Economics",
            dataLevel : "Expert",
            dataPrice : "Paid",
            dataLanguage : "English,Tamil,Telugu",
            dataSort : "Popular",
            className : "course-box",
            firstChildClass : "course-img",
            img_url:Economic,
            courseName : 'Veranda Economic Online Class',
            courseDesc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            courseProviderName : 'David Warner',
            courseTotalLesson : 25,
            courseAvailableLang : 'English,Tamil,Telugu',
            courseProviderImg :  Provider1,
            dataCourseAmt : 5500,
        },
        { 
            id : 5,
            dataCategory : "Statistics",
            dataLevel : "Expert",
            dataPrice : "Paid",
            dataLanguage : "English",
            dataSort : "Popular",
            className : "course-box",
            firstChildClass : "course-img",
            img_url:Statistic,
            courseName : 'Veranda Statistcis Online Class',
            courseDesc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            courseProviderName : 'David Warner',
            courseTotalLesson : 25,
            courseAvailableLang : 'English',
            courseProviderImg :  Provider1,
            dataCourseAmt : 5500,
        },
        { 
            id : 6,
            dataCategory : "Data Analysis",
            dataLevel : "Expert",
            dataPrice : "Paid",
            dataLanguage : "Hindi",
            dataSort : "Popular",
            className : "course-box",
            firstChildClass : "course-img",
            img_url:DataAnalysis,
            courseName : 'Veranda Data Analysis Online Class',
            courseDesc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            courseProviderName : 'David Warner',
            courseTotalLesson : 25,
            courseAvailableLang : 'Hindi',
            courseProviderImg :  Provider1,
            dataCourseAmt : 5500,
        },
        { 
            id : 7,
            dataCategory : "Accountant",
            dataLevel : "Expert",
            dataPrice : "Paid",
            dataLanguage : "Tamil",
            dataSort : "Popular",
            className : "course-box",
            firstChildClass : "course-img",
            img_url:Accountant,
            courseName : 'Veranda Accountant Online Class',
            courseDesc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            courseProviderName : 'David Warner',
            courseTotalLesson : 25,
            courseAvailableLang : 'Tamil',
            courseProviderImg :  Provider1,
            dataCourseAmt : 5500,
        },
        { 
            id : 8,
            dataCategory : "GST",
            dataLevel : "Expert",
            dataPrice : "Paid",
            dataLanguage : "Tamil,Malayalam",
            dataSort : "Popular",
            className : "course-box",
            firstChildClass : "course-img",
            img_url: GST,
            courseName : 'Veranda GST Online Class',
            courseDesc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            courseProviderName : 'David Warner',
            courseTotalLesson : 25,
            courseAvailableLang : 'Tamil,Malayalam',
            courseProviderImg :  Provider1,
            dataCourseAmt : 5500,
        },
        { 
            id : 9,
            dataCategory : "Market Trend",
            dataLevel : "Expert",
            dataPrice : "Free",
            dataLanguage : "Tamil,Telugu",
            dataSort : "Popular",
            className : "course-box",
            firstChildClass : "course-img",
            img_url: MarketTrend,
            courseName : 'Veranda Market Trend Online Class',
            courseDesc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            courseProviderName : 'David Warner',
            courseTotalLesson : 25,
            courseAvailableLang : 'Tamil,Telugu',
            courseProviderImg :  Provider1,
            dataCourseAmt : 5500,
        },
        { 
            id : 10,
            dataCategory : "IBPS Exams",
            dataLevel : "Intermediate",
            dataPrice : "Paid",
            dataLanguage : "Tamil,English",
            dataSort : "Popular",
            className : "course-box",
            firstChildClass : "course-img",
            img_url:IBPS_Pic,
            courseName : 'Veranda IBPS Exam Online Coaching Class',
            courseDesc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            courseProviderName : 'David Warner',
            courseTotalLesson : 20,
            courseAvailableLang : 'English,Tamil',
            courseProviderImg :  Provider1,
            dataCourseAmt : 7500,
        },
    ],
    FinalCourseList : []
}

const courseReducer = (state = initialState,action) => {
    console.log('action.payload',action.payload)
    switch (action.type) {
        case CATEGORY : 
            return {
                ...state,
                FinalCourseList : action.payload
            }

        case NEW_COURSE : 
            return {
                // ...state,
                courses : state.courses.concat(action.payload),
                FinalCourseList : state.FinalCourseList.concat(action.payload)
            }
        
        default: 
            return {
                ...state,
                FinalCourseList : action.payload
            }
    }
}

export default courseReducer