import React, {useState , useEffect} from 'react';
import { v4 as uuidv4 } from "uuid";
import axios from 'axios';
import { getUser } from "../../api";
import Chart from 'react-apexcharts'

const Reports = () => {
    const [foodListBreakfest, setFoodListBreakfest] = useState([]);
    const [foodListLunch, setFoodListLunch] = useState([]);
    const [foodListDinner, setFoodListDinner] = useState([]);
    const [foodListSnacks, setFoodListSnacks] = useState([]);
    const [breakfastKcal, setBreakfastKcal] = useState(0);
    const [lunchfastKcal, setLunchfastKcal] = useState(0);
    const [dinnerfastKcal, setDinnerfastKcal] = useState(0);
    const [snacksfastKcal, setSnacksfastKcal] = useState(0);



      
    
useEffect(() => {

        getUser().then(data =>{

        axios.get(`https://localhost:44361/user/getFood/${data.id}`, {
      })
      .then(response => {
          const data = response.data ; 
          let  brKcal = 0
          let  luKcal = 0
          let  diKcal = 0
          let  smKcal = 0
          for(let  i = 0 ;i<data.length ;i++) 
          {

              if(data[i].mealType == 'Breakfast'){
                foodListBreakfest.push(data[i]);               
                brKcal += data[i].calories ; 
                

                 
              }
              if(data[i].mealType == 'Lunch'){
                foodListLunch.push(data[i])
                luKcal += data[i].calories ; 
                
                
                 
              }
              if(data[i].mealType == 'Dinner'){
                foodListDinner.push(data[i])
                diKcal+= data[i].calories ; 
                
                
                
              }
              if(data[i].mealType == 'Snacks'){
                foodListSnacks.push(data[i])
                smKcal+= data[i].calories ; 
                
                
              }            

          }
          setBreakfastKcal(brKcal)
          setLunchfastKcal(luKcal) 
          setDinnerfastKcal(diKcal)
          setSnacksfastKcal(smKcal)
      })
    })
    },[])
    const state = {
        options: {
          chart: {
            id: 'apexchart-example'
          },
          xaxis: {
            categories: ["Breakfast(kcal)", "Lunch(kcal)", "Dinner(kcal)", "Snacks(kcal)"]
          }
        },
        series: [{
          name: 'series-1',
          data: [breakfastKcal, lunchfastKcal, dinnerfastKcal, snacksfastKcal]
        }]
      }

return(
    <div className = 'container' style = {{marginTop : '10%' , marginLeft : '30%'}}>
        <h1> Reports </h1>
        <Chart options={state.options} series={state.series} type="bar" width={600} height={500} />
    </div>
)

};
export default Reports;
