  var testing = function(){
    alert('hello');
  }

  var personOne = {firstName: "john", lastName: "johnson", phoneNumber: '404-333-3232'};
  var personTwo = {firstName: "sally", lastName: "johnson", phoneNumber: '404-334-2323'};
  var personThree = {firstName: "sue", lastName: "johnson", phoneNumber: '404-335-3223'};

  var people = [personOne, personTwo, personThree];

  console.log(people);

  var $list = $('#personList');


  people.forEach(function(p){

    $list.append(
                '<tr> \
                  <td>' + p.firstName + '</td> \
                  <td>' + p.lastName + '</td> \
                  <td>' + p.phoneNumber + '</td> \
                </tr>'
      )
  })




  var addPersonToList = function(event){
    alert('hello');

    event.preventDefault();

    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var phoneNumber = $('#phoneNumber').val();
    
    alert("first: " + firstName + " last: " + lastName + "phone: " + phoneNumber);

      $list.append(
                '<tr> \
                  <td>' + firstName + '</td> \
                  <td>' + lastName + '</td> \
                  <td>' + phoneNumber + '</td> \
                </tr>'
      )

    firstName = $('#firstName').val('');
    lastName = $('#lastName').val('');
    phoneNumber = $('#phoneNumber').val('');
    
  }

  $('#submitButton').on('click', testing);