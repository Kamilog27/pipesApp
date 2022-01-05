import { Pipe, PipeTransform } from "@angular/core";
 
@Pipe({
    name:'vuela'
})
export class VuelaPipe implements PipeTransform{

    transform(value:boolean):string {
        let valor=''
       if(value===true){
           valor='Vuela'
       }else{
             valor='No vuela'
       }
       return valor;
    }

}