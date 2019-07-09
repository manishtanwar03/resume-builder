export class Details{
    public basic_information:{
        firstname:String,
        lastname:String,
        address:{
            street:String,
            city:String,
            state:String,
            pincode:String
        },
        phone:number,
        email:String,
        summary:String
    };
    work_history:[{
        job_title:String,
        company:String,
        city:String,
        state:String,
        start_date:String,
        end_date:String,
        description:String
    }];
    education:[{
        school_name:String,
        degree:String,
        graduation_year:String
    }];
    skills:[String];
    interests:[String];
    languages:[{}];
    personal_projects:[{
        name:String,
        start_date:String,
        end_date:String,
        description:String
    }];
    template:String;

    constructor(interests:[String],languages:[{'name':String,'value':Number}],skills:[String],
                education:[{'school_name':String,'degree':String,'graduation_year':String}],
                personal_projects:[{'name':String,'start_date':String,'end_date':String,'description':String}],
                work_history:[{'job_title':String, 'company':String,'city':String,'state':String, 'start_date':String,'end_date':String,'description':String}],
                basic_information:{ 'firstname':String,'lastname':String,
                        'address':{
                        'street':String,
                        'city':String,
                        'state':String,
                        'pincode':String
                    },'phone':number,'email':String,'summary':String })
                   
                   
                    {
        // this.interests = interests;
        // languages.forEach((language)=>{
        //     this.languages.push({
        //         'name':language.name,
        //         'value':language.value 
        //     })
        // });
        // this.skills=skills;

        // personal_projects.forEach((personal_project)=>{
        //     this.personal_projects.push({
        //         'name':personal_project.name,
        //         'start_date':personal_project.start_date,
        //         'end_date':personal_project.end_date,
        //         'description':personal_project.description
        //          })
        //     }); 
        //     work_history.forEach((work)=>{
        //         this.work_history.push({
        //             'job_title':work.job_title,
        //             'company':work.company,
        //             'city':work.city,
        //             'state':work.state,
        //             'start_date':work.start_date,
        //             'end_date':work.end_date,
        //             'description':work.description

        //         })
        //     });
        // education.forEach((edu)=>{
        //     this.education.push({
        //         'school_name':edu.school_name,
        //         'degree':edu.degree,
        //         'graduation_year':edu.graduation_year
        //          })
        //     });
        
        // this.basic_information.firstname=basic_information.firstname;
        // this.basic_information.lastname=basic_information.lastname;
        // this.basic_information.email=basic_information.email;
        // this.basic_information.phone=basic_information.phone;
        // this.basic_information.summary=basic_information.summary;
        // this.basic_information.address.city=basic_information.address.city;
        // this.basic_information.address.pincode=basic_information.address.pincode;
        // this.basic_information.address.state=basic_information.address.state;
        // this.basic_information.address.street=basic_information.address.street;

    }
}

