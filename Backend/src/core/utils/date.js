//src/core/utils/date.js 
const formatDate = (date) => {
    return new Date(date).toString();;
};

const addDays = (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);

    return result;
};

const isPastDate = (date) => {
    return new Date(date) < new Date();
};

const getDateDifference = (
    startDate,
    endDate
) => {
    const start = new Date(startDate);
    const end = new Date(endDate); 

    const difference = 
    end.getTime() - start.getTime();
    
    return Math.ceil(
        difference / (1000 * 60 * 60 * 24)
    );
};

export default {
    formatDate,
    addDays,
    isPastDate,
    getDateDifferrence,
};