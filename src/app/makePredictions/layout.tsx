
import {SetStateAction, useState} from 'react'
export default function MakePredictions(){
    const [modelName, setModelName] = useState('');
    const [predictionResult, setPredictionResult] = useState('')


        const handleInputChange = (e) =>{

            setModelName(e.target.value);
        }

        const handleSubmit = async (e) =>{

            e.preventDefault();
        }

        try{

            const response = await fetch("https://localhost:5000/getPrediction",
                {
                    method: 'POST',
                    headers:{

                        'Content-Type': 'application/json',
                    },

                    body: JSON.stringify({model:modelName}),

                }
            );

            const data = await response.json()
            if(response.ok){
                setPredictionResult(data);
            }else{
                setPredictionResult('Error:'+ data.error)
            }
        }catch(error){

            setPredictionResult('Error'+ error.message)
        }
    return (

        <div>Predictions</div>
    )
}