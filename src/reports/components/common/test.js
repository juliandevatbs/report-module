function test() {
    
    var idx = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    var tmp = "";
      for (var i=0; i < pwd.length; i++)
          tmp += " "+idx.indexOf(pwd.charAt(i));

      if(tmp == " 7 8 7 9 1 9 12 10 7 5 7 4 7 37 1 0 12 5 13 12")
      {
          $.post('/jobs/challenge/submit', {pwd: pwd}).always(function(x) { window.location = '/jobs/challenge/next'});
      }
    
    
}

test()

      
      


    