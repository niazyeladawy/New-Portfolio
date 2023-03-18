import axios from 'axios';
import { createContext, useState } from 'react';

export const ResumeDataContext = createContext();

export const ResumeDataProvider = ({ children }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true)
        let { data } = await axios.get("https://resume-data-f7790-default-rtdb.europe-west1.firebasedatabase.app/data.json");
        setData(data);
        setLoading(false);
    }

    return (
        <ResumeDataContext.Provider value={{ data, setData, loading, setLoading, fetchData }}>
            {children}
        </ResumeDataContext.Provider>
    );
};
