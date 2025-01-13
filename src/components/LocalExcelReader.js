import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
import moment from 'moment';

const LocalExcelReader = ({ filePath, onDataLoaded }) => {
  // eslint-disable-next-line
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(filePath);
        const arrayBuffer = await response.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        const processData = jsonData.map(row => {


          if (row['interest_level_percentage']){
            
            row['interest_level_percentage'] = row['interest_level_percentage']*100;
          }

          if (row['Date'] && typeof row['Date'] === 'number') {
            const excelDate = new Date((row['Date'] - 25569) * 86400 * 1000);
            const formattedDate = moment(excelDate).format('DD-MM-YYYY');
            row['Date'] = formattedDate;
          }

          const scoreString = row['Score Call'];  
          if (scoreString && typeof scoreString === 'string') {
            const Call_scores = scoreString
              .split('\r\n')  
              .map(item => {
                const [name, score] = item.split(' - ').map(part => part.trim());
                return { name, score: parseInt(score) };  
              });
            return { ...row, Call_scores };
          }
          return row;  
        });

        
        setData(processData);
        onDataLoaded(processData);

      } catch (error) {
        console.error('Error reading Excel file:', error);
      }
    };

    fetchData();
  }, [filePath, onDataLoaded]);

  return (
    <div>
      
    </div>
  );
};

export default LocalExcelReader;
