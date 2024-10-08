let customerTable =document.getElementById("CustomerTable");
let customerTableBody=` <tr>
                            <th class="th001">Customer Name</th>
                            <th>Contact Number</th>
                            <th colspan="2">Action</th>
                            
                        </tr>`;
let customers
fetch('script/Customer.json')
    .then((response) => response.json())
    .then((cutomerList) =>{
        customers=cutomerList;
        cutomerList.forEach (function(customer,i)  {
        customerTableBody+=` <tr>
                            <td class="td001">${customer.customerName}</td>
                            <td>${customer.contactNumber}</td>
                            <td><button class="btn " onclick=edit(${i})><img src="images/edit.png" class="
                            imgEdit"></button></td>
                            <td><button class="btn"><img src="images/delet.png"></button></td>
                            

                            
                        </tr>`
        });
        customerTable.innerHTML=customerTableBody;
    });


    function loadTable() {
        let customerTable = document.getElementById("CustomerTable");
        customerTable.innerHTML = "";
        let customerTableBody = ` <tr>
                                <th class="th001">Customer Name</th>
                                <th>Contact Number</th>
                                <th colspan="2">Action</th>
                                
                            </tr>`;
        customers.forEach(function (customer, i) {
            customerTableBody += ` <tr>
                                    <td class="td001">${customer.customerName}</td>
                                    <td>${customer.contactNumber}</td>
                                    <td><button class="btn " onclick=edit(${i})><img src="images/edit.png" class="imgEdit"></button></td>
                                    <td><button class="btn"><img src="images/delet.png"></button></td>
                                    
        
                                    
                                </tr>`
        });
        customerTable.innerHTML = customerTableBody;
    }
   
   function edit(index){
    let cname =document.getElementById("cname");
    let ccontact =document.getElementById("ccontact");

    cname.value=customers[index].customerName;
    ccontact.value=customers[index].contactNumber;

    $('#customerEdit').modal('show')
   } 

   function saveCustomer(){
    let cname =document.getElementById("cname").value;
    let ccontact =document.getElementById("ccontact").value;
    customers.push(
        {
            "customerName":cname,
            "contactNumber":ccontact
        }
    );
    console.log(customers)
    $('#customerEdit').modal('hide');
    loadTable();
   }


   $(document).ready(function() {
    $('#customerEdit').on('hidden.bs.modal', function() {
        $(':input', this).val('');
    });
  });