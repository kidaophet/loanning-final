var express= require('express');



class Functions {
    // normal_interest
    normal_interest(principle,rate_n,term,normal_interest) {
        var p = principle;
        const r=rate_n;
        var nor=normal_interest;
        var term=term;
        
        var nor= parseFloat(p)*parseFloat(r/100)/parseInt(term)
        for(i=1;i<term;i++){
            var txt = '{"nor":'+nor+'}';
            var obj = JSON.parse(txt);
            return obj;
        }
        
    }
    penalty_interest(principle,rate_p,term,penalty_interest,outstanding,normalpayment) {
        var p = principle;
        const r=rate_p;
        var pen=penalty_interest;
        var term=term;
        var o=outstanding;
        
      
        
        let pen=((p*r/term)*o)+((nor*r/term)*o);
        for(i=1;i<term;i++){
        var txt = '{"pen":'+pen+'}';
        var obj = JSON.parse(txt);
        return obj;}
    }
    principal(principle,term) {
        var a = principle;
        var term=term;
        var pp= parseFloat(a)/parseInt(term);
        
        for(i=1;i<=term;i++){
            var txt = '{"pp":'+pp+'}';
            var obj = JSON.parse(txt);
            return obj;
        }
    }
    outstanding_days(loan_date, deadline,outstanding_days) {
        var datepay= new Date(),
        deadline= new Date(),
        days=1000*60*60*24;
        diff=loan_date-deadline;       
        var od=outstanding_days;


        let diffTime = Math.abs(deadline - datepay);
        var od = Math.ceil(diffTime / days); 
        var txt = '{"od":'+od+'}';
        var obj = JSON.parse(txt);
        return obj;
    }


}
module.exports=Functions;







 
        





                          








                

                        
    
                   
