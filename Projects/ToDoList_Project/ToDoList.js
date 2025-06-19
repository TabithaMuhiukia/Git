// array to store the tasks
let myTask = [
    
    {
        id:1,
        title:"Update Dashboards & Reports",
        description:`Refresh Power BI dashboards (e.g., Loan Disbursements, Agent Float Utilization, Ecosystem KPIs).
                Check if scheduled reports ran successfully.`
    },
    {
        id:1,
        title:"Monitor Key Metrics",
        description:`Track OLB (Outstanding Loan Balances), DPD (Days Past Due), PAR (Portfolio at Risk).
            Watch for unusual trends or spikes (e.g., high disbursement or delayed repayments).`
    },
    {
        id:1,
        title:"Respond to Ad-hoc Requests",
        description:`Handle urgent data pulls from Credit, Risk, Ecosystem, or Finance teams.
                Write quick SQL scripts or Excel pivots for business managers.`
    },
    {
        id:1,
        title:"Compile Performance Reports",
        description:`Prepare weekly summaries by SOL_ID, Product, Sector, or Channel.
                    Generate reports for senior management and branch heads.`
    },
    {
        id:1,
        title:"Data Quality Checks",
        description:`Run validations on customer info, CIF_ID duplicates, FORACID mismatches.
                    Flag incorrect mappings of accounts or managers.`
    },
    {
        id:1,
        title:"Prepare Regulatory & Compliance Reports",
        description:`Generate reports for CBK or internal audit (e.g., Loan Classification, PAR analysis).
                    Reconcile balances with Finance/GL reports.`
    },
    {
        id:1,
        title:"Maintain SQL/Python Scripts",
        description:`Optimize slow scripts (e.g., UNION queries for monthly tables).
                    Automate recurring reports (batch jobs, Python-Excel exports).`
    },
    {
        id:0,
        title:'Learning Web Development',
        description: `Web development is the process of creating websites or web applications that you
        use on the internet—like Google, Facebook, online shops, blogs, or even simple portfolio sites.
        There Are 3 Main Parts in Web Development:
        1. Frontend_Clientside: Think of it like designing and decorating a house for guests to see.
        This is what users see and interact with on a website. It includes:
        HTML: the structure (like the skeleton of a page)
        CSS: the style (colors, fonts, layout)
        JavaScript: the behavior (clicking buttons, image sliders, search boxes)
        2. Backend_Server-side: Think of it like the kitchen or boiler room—visitors don't see it, but it powers the whole house.
        This is what runs behind the scenes. It handles: Storing and managing data (like user info, products, orders),
        Talking to the database, Processing user requests. Common backend languages include: Python, PHP, Java, JavaScript (Nodejs),
        Ruby, and more.
        3. Database: It's like a big organized notebook for your site.
        A database stores all the information a website needs:
        Usernames & passwords, Product details, Posts, comments, messages, etc. Popular databases: MySQL, MongoDB, PostgreSQL.`
    },
]

// add task
document.getElementById("myForm").addEventListener('submit',function(event){
    event.preventDefault()
    // form validation
    let title = document.getElementById("title").value
    let description = document.getElementById("description").value

    // title validation
    title = title.trim()
    if(title.length == 0){
        alert('Title cannot be null')
        return
    }

    // description validation 
    description = description.trim()
    if(description.length == 0){
        alert('Description cannot be null')
        return
    }
   
    // create a task object
    let new_task = {
        id:null,
        title:null,
        description:null,
    }
    // assign value to the object
    new_task.id = myTask.length 
    new_task.title = title
    new_task.description = description
    
    // add to the array
    myTask.push(new_task)


    // make the html inputs blank
    document.getElementById("title").value = ''
    document.getElementById("description").value = ''

    // update the html side
    updateMyTasks()
})
// delete tasks
function  deleteTask(task){
    let rem_tasks = myTask.filter((item)=> item.id != task.id )
    myTask = []
    rem_tasks.forEach(element=>{
        myTask.push(element)
    })
    updateMyTasks()
}
// edit tasks

// update the tasks
function updateMyTasks(){
    let list =  document.getElementById("list")
    //clearing the list
    list.innerHTML = ''
    
    myTask.forEach(element=>{
        // create tags
        let container = document.createElement("div")
        let title_div = document.createElement("div")
        let button_div = document.createElement("div")
        let title = document.createElement("h3")
        let delete_button = document.createElement("button")
        let edit_button = document.createElement("button")
        let description_div = document.createElement("div")
        let description = document.createElement("p")

        // assign classnames
        container.className = "container"
        title_div.className = "title_div"
        button_div.className = "button_div"
        delete_button.className = "delete_btn"
        edit_button.className = "edit_btn"
        description_div.className = "list_desc"
        description.className = "description"

        //assigning data
        title.innerHTML = element.title
        description.appendChild(document.createTextNode(element.description))
        delete_button.innerHTML = "Delete"
        edit_button.innerHTML = "Edit"
        
        
        // adding event listener to the button
        delete_button.addEventListener('click',()=>{
            deleteTask(element)
        })
        // add event listener to the title
        title_div.addEventListener('click',()=>{
            if(description_div.style.display == 'none'){
                description_div.style.display = 'block'
            }else{
               description_div.style.display = 'none' 
            }            
        })

        // push to html
        title_div.appendChild(title)
        button_div.appendChild(edit_button)
        button_div.appendChild(delete_button)
        title_div.appendChild(button_div)
        description_div.appendChild(description)
        container.appendChild(title_div)
        container.appendChild(description_div)

        list.appendChild(container)
    })
}

updateMyTasks()