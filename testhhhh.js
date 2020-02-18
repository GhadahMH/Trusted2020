function search(){
    var Arr = [];
    var rootRef = firebase.database().ref().child("Property");
    rootRef.on("child_added", snap => {
      var Description1=snap.child("Adressline1").val();
      Arr.push(Description1);
      window.alert(snap.val());
      window.alert(Arr.toString());
      /*("10R").append();*/
    });
  
  }