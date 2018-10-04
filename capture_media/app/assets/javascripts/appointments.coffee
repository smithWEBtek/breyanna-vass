# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

# element.addEventListener("click", function(){
#     alert("We are now creating an appointment!")
# })

# create an alert for when the new appointment button is clicked
#Js Code:
#  const myBtn = document.getElementById("myBtn");

#  myBtn.addEventListener("click", function(event){
#     alert ("We are going to create a new appointment!")
#  })

#CoffeeScript Code:
 myBtn.addEventListener 'click', (event) ->
  alert 'We are going to create a new appointment!'
  return

# document.getElementById("myBtn").addEventListener("click", function(){
#     alert("We are going to create a new appointment!")
# })
