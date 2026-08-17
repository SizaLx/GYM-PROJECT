function CHnumerique(ch) {
  for (i = 0; i < ch.length; i++) {
    if (ch[i] >= "0" && ch[i] <= "9") {
      return true;
    } else {
      return false;
    }
  }
}
function isalphanumerique(pw) {
  for (i = 0; i < pw.length; i++) {
    if (
      (pw[i] >= "0" && pw[i] <= "9") ||
      (pw[i].toUpperCase() > "A" && pw[i].toUpperCase() <= "Z")
    ) {
      return true;
    } else {
      return false;
    }
  }
}
function verif() {
  CN = document.getElementById("CN").value;
  //if(!isNaN(CN) || CN.length!=8 || (CN[0]!=0 || CN[0]!=1))
  if (
    (CN.length == 8 && (CN[0] == 0 || CN[0] == 1) && CN != "") ||
    CHnumerique(CN) == false
  ) {
    alert("CIN valide");
  } else {
    alert(
      "verifier le numero cin qui doit entre de 8 chiffres et commence par 0 ou 1"
    );
  }

  let np = document.getElementById("NP").value;
  let ok;
  nbesp = 0;
  // alert(np);
  for (i = 0; i < np.length; i++) {
    if (
      (np[i].toUpperCase() >= "A" && np[i].toUpperCase() <= "Z") ||
      np[i] == " "
    ) {
      ok = true;
    } else {
      ok = false;
    }
  }
  if (ok == true && np.length >= 3 && np != "") {
    // {alert("np valide");}
    document.getElementById("error1").innerHTML =
      "  <span style='color:red;'>np valide</span>";
  } else {
    document.getElementById("error1").innerHTML =
      "  <span style='color:red;'>np invalide!!!</span>";
  }

  let tel = document.getElementById("Tel").value;
  let Tele = String(tel);

  if (Tele.length == 8 && Tele[0] != 0 && Tele[0] != 2 && Tele != "") {
    alert("tel valide");
  } else {
    alert(
      "verifier le numero tel qui doit entre de 8 chiffres et ne commence pas  par 0 et  2"
    );
  }

  //verification Email
  let ch = document.getElementById("email").value;
  //alert(ch);
  let test = false;
  let espace = 0;
  for (i = 0; i < ch.length; i++) {
    if (ch[i] == " ") {
      espace = espace + 1;
      test = true;
    }
  }
  p = ch.indexOf("@");
  ch1 = ch.substring(0, p - 1);
  ch2 = ch.substring(p + 1);
  pospoint = ch2.lastIndexOf(".");
  ch3 = ch2.substring(pospoint + 1);
  if (
    p > 1 &&
    p != ch.length &&
    ch3.length >= 2 &&
    ch3.length <= 3 &&
    ch != "" &&
    test == false
) {
    document.getElementById("error4").innerHTML =
      "<span style='color:red;'>adesse email  valide</span>";
  } else {
    document.getElementById("error4").innerHTML =
      "<span style='color:red;'>adesse email  invalide!!!</span>";
  }

  //verif password
  let pw = document.getElementById("pw").value;
  if (isalphanumerique(pw) == true && pw.length == 8) {
    alert("password valide ");
  } else {
    alert("password invalid");
  }
  let confirm = document.getElementById("confirmation").value;
  if (pw == confirm) {
    alert("confirmation validé");
  } else {
    alert(" le pw et sa confirmation doivent être identiques");
  }

  //Vérifier selection activité sportive
  let act = document.getElementById("ActSport").selectedIndex;
  if (act > 0) {
    // (act == "Gymnastique" || act == "Karaté") {
    alert("vous avez bien choisit votre activité" + act);
  } else {
    alert("choisir votre activité");
  }
}

function payer() {
  let Ag = document.getElementsByName("Age");
  let Ab = document.getElementsByName("Abonn");
  let act = document.getElementById("ActSport").value;
  let NetPayer = 0;
  if (Ag[0].checked) {
    if (act == "Gymnastique") {
      if (Ab[0].checked) {
        NetPayer = 40;
      } else {
        NetPayer = 100;
      }
    } else if (act == "Karaté") {
      if (Ab[0].checked) {
        NetPayer = 30;
      } else {
        NetPayer = 80;
      }
    }
  } else if (Ag[1].checked) {
    if (act == "Gymnastique") {
      if (Ab[0].checked) {
        NetPayer = 40;
      } else {
        NetPayer = 150;
      }
    } else if (act == "Karaté") {
      if (Ab[0].checked) {
        NetPayer = 40;
      } else {
        NetPayer = 100;
      }
    }
  }
  document.getElementById("NetPayer").value = NetPayer + "DT";
}
