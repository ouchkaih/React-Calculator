import {React , Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "./calculator.css"

class Calculator extends Component {
    constructor (props){
        super(props);
        this.state = {
            first_number : "",
            secound_number : "",
            equation:"",
            number_showed:"0",
            result : 0,
            continueCalcul : true
        }
    
        // this.table_elements = [
        //     {
        //         first_element : "CE",
        //         secound_element : "C",
        //         third_element : "del",
        //         fourd_element : "/",
        //     },

        //     {
        //         first_element : "7",
        //         secound_element : "8",
        //         third_element : "9",
        //         fourd_element : "X",
        //     },

        //     {
        //         first_element : "4",
        //         secound_element : "5",
        //         third_element : "6",
        //         fourd_element : "-",
        //     },

        //     {
        //         first_element : "1",
        //         secound_element : "2",
        //         third_element : "3",
        //         fourd_element : "+",
        //     },

            // {
            //     first_element : "+/-",
            //     secound_element : "0",
            //     third_element : ".",
            //     fourd_element : "=",
            // }


        // ]
    }



    change_number = (e)=>{
        // here the user gave the default value to first number 0
        if(this.state.equation === "" && this.state.continueCalcul ===true){
            // if the user click for number in the first memant we gave it to the first number 
            if(this.state.first_number === "" && this.state.equation !== ''){
                this.setState(
                    {
                        ...this.state,
                        first_number: e.target.value,
                        number_showed : e.target.value,
                        result: parseInt(e.target.value),
                        // the variable number_showed and result = first number

                    }
                )
            }else{
                // we the user click for number but not the first time and he didn't choise the equation already we add the number to the first number 
                this.setState(
                    {
                        ...this.state,
                        first_number: this.state.first_number+ e.target.value,
                        number_showed : this.state.first_number+ e.target.value,
                        result: parseInt(this.state.first_number+ e.target.value),
                        // here also the variable number_showed and result = first_number
                    }
                )
            }
        // if the user choise the equation 
        }else{
            console.log(this.state.continueCalcul)
            console.log(this.state.equation)

             // if the secound number hasn't a value 
            if(this.state.secound_number === "" && this.state.equation !== ""){
                this.setState(
                    {
                        ...this.state ,
                        secound_number: e.target.value,
                        number_showed : this.state.secound_number+ e.target.value
                        //  the variable number_showed = secound_number

                    }
                )

            // we the user click for number but not the first time and he choise the equation we add the number to the secound number 
            }else if(this.state.secound_number !== "" ){
                this.setState(
                    {
                        ...this.state,
                        secound_number: this.state.secound_number+ e.target.value,
                        number_showed : this.state.secound_number+ e.target.value
                        //  the variable number_showed = secound_number

                    }
                )
            
            }
            
        }

        
    }


    
    change_equation = (e)=>{
        // if the use choise the equation in the first time 
        if(this.state.equation === "" ){
            this.setState({
                ...this.state,
                equation : e.target.value,
                continueCalcul:true
            })
        }else{
            this.setState({
                ...this.state,
                equation : e.target.value,
                continueCalcul:true
            })
            this.calcul()
        
        }
    }


    calcul = (e)=>{
        if(this.state.first_number !=="" && this.state.secound_number !== "" && this.state.result !== "" ){

        console.log("we are here")
            if(this.state.equation === "/"){
                if(this.state.first_number === "0" || this.state.secound_number === "0"){
                    this.setState(
                        {
                            ...this.state,
                            number_showed:"Undefined "
                        }
                    )
                }else{
                    this.setState(
                        {
                            ...this.state,
                            result: parseFloat(this.state.result) / parseFloat(this.state.secound_number),
                            number_showed: parseFloat(this.state.result) / parseFloat(this.state.secound_number),
                            secound_number:"",
                            equation :"",
                            continueCalcul:false,

                            
                        }
                    )
                }
            }else if(this.state.equation === "x"){
                this.setState(
                        {
                            ...this.state,
                            result: parseFloat(this.state.result) * parseFloat(this.state.secound_number),
                            number_showed: parseFloat(this.state.result) * parseFloat(this.state.secound_number),
                            secound_number:"",
                            equation :"",
                            continueCalcul:false
                            
                        }
                    )
            }else if(this.state.equation === "+"){
                this.setState(
                    this.setState(
                        {
                            ...this.state,
                            result: parseFloat(this.state.result) + parseFloat(this.state.secound_number),
                            secound_number:"",
                            number_showed: parseFloat(this.state.result) + parseFloat(this.state.secound_number),
                            equation :"",
                            continueCalcul:false
                        }
                    )
                )
            }else if(this.state.equation === "-"){
                this.setState(
                    this.setState(
                        {
                            ...this.state,
                            result: parseFloat(this.state.result) - parseFloat(this.state.secound_number),
                            secound_number:"",
                            number_showed: parseFloat(this.state.result) - parseFloat(this.state.secound_number),
                            equation :"",
                            continueCalcul:false
                        }
                    )
                )
            }
        }
    }

    render(){
        return(
            <div className="p-3 pb-5">
                <h1 className="text-center text-light text_shadow ">
                    Calculator
                </h1>
                <div className="d-flex justify-content-center align-items-center p-3 pb-5">
                
                <div className="text-light  m-5 rounded-3 p-1 border border-2 border-white p-3 pb-2 body mb-5">
                    <div className="bg-dark p-3 text-end">
                        <p>
                            {
                                this.state.result 
                            }
                            &nbsp;
                            {
                                this.state.equation 
                            }
                            &nbsp;
                            {
                                this.state.secound_number 
                            }
                        </p>
                        <h1 className="screen"> {
                            this.state.number_showed
                        } 
                        </h1>
                    </div>
                    <div className="">
                        
                        <div className="row">
                            <div className="col-3 p-0">
                                <button className="btn btn-dark w-100 rounded-0 button_width" > 
                                   CE
                                </button>
                            </div>
                            <div className="col-3 p-0 ">
                                <button className="btn btn-dark w-100 rounded-0 button_width  "> 
                                    C
                                </button>
                            </div>
                            <div className="col-3 p-0">
                                <button className="btn btn-dark w-100 rounded-0 button_width   "> 
                                     del
                                </button>
                            </div>
                            <div className="col-3 p-0 ">
                                <button className="btn btn-dark w-100 rounded-0 button_width   "  value="/" name="/" onClick={this.change_equation}> 
                                    /
                                </button>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-3 p-0">
                                <button className="btn btn-dark w-100 rounded-0 button_width   "  value="7" name="7" onClick={this.change_number}> 
                                    7
                                </button>
                            </div>
                            <div className="col-3 p-0 ">
                                <button className="btn btn-dark w-100 rounded-0 button_width  " name="8" value="8" onClick={this.change_number}> 
                                    8
                                </button>
                            </div>
                            <div className="col-3 p-0">
                                <button className="btn btn-dark w-100 rounded-0 button_width   " name="9" value="9" onClick={this.change_number}> 
                                     9
                                    
                                </button>
                            </div>
                            <div className="col-3 p-0 ">
                                <button className="btn btn-dark w-100 rounded-0 button_width   " name="x" value="x" onClick={this.change_equation}> 
                                    x
                                </button>
                            </div>
                        </div>



                        <div className="row">
                            <div className="col-3 p-0">
                                <button className="btn btn-dark w-100 rounded-0 button_width   " value="4" name="4" onClick={this.change_number}> 
                                    4
                                </button>
                            </div>
                            <div className="col-3 p-0 ">
                                <button className="btn btn-dark w-100 rounded-0 button_width  " name="5" value="5" onClick={this.change_number}> 
                                    5
                                </button>
                            </div>
                            <div className="col-3 p-0">
                                <button className="btn btn-dark w-100 rounded-0 button_width   " name="6" value="6" onClick={this.change_number}> 
                                     6

                                </button>
                            </div>
                            <div className="col-3 p-0 ">
                                <button className="btn btn-dark w-100 rounded-0 button_width    " name="-" value="-" onClick={this.change_equation}> 
                                    -
                                </button>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-3 p-0">
                                <button className="btn btn-dark w-100 rounded-0 button_width   " name="1" value="1" onClick={this.change_number}> 
                                    1
                                </button>
                            </div>
                            <div className="col-3 p-0 ">
                                <button className="btn btn-dark w-100 rounded-0 button_width  " name="2" value="2" onClick={this.change_number}> 
                                    2
                                </button>
                            </div>
                            <div className="col-3 p-0">
                                <button className="btn btn-dark w-100 rounded-0 button_width   " name="3" value="3" onClick={this.change_number}> 
                                     3
                                    
                                </button>
                            </div>
                            <div className="col-3 p-0 ">
                                <button className="btn btn-dark w-100 rounded-0 button_width    " name="+" value="+" onClick={this.change_equation}> 
                                    +
                                </button>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-3 p-0">
                                <button className="btn btn-dark w-100 rounded-0 button_width   " name="ne" value="negatife"> 
                                    +/-
                                </button>
                            </div>
                            <div className="col-3 p-0 ">
                                <button className="btn btn-dark w-100 rounded-0 button_width  " name="0" value="0" onClick={this.change_number}> 
                                    0
                                </button>
                            </div>
                            <div className="col-3 p-0">
                                <button className="btn btn-dark w-100 rounded-0 button_width   " name="." value="."> 
                                    <b> .
                                    </b>
                                </button>
                            </div>
                            <div className="col-3 p-0 ">
                                <button className="btn btn-primary w-100 rounded-0 button_width button_equale   " name="=" value="=" onClick={this.calcul}> 
                                    =
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
        )
    }
}

export default Calculator