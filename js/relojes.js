//CLICAR EN LOS RELOJES

    function modalReloj(num){


    switch(num){
        case 1:
            var $oce1 = $("#oce1 h3").html();
            $(".modal-title").html($oce1+ " - " + "UTC +8" + " - Oceania");
            $(".modal-body h3").html("Australia - Western Standard Time");
            break;
        case 2:

            break;
        case 3:

            var $oce3 = $("#oce3 h3").html();
            $(".modal-title").html($oce3+ " - " + "UTC +10" + " - Oceania");
            $(".modal-body h3").html("Papua New Guinea<br>"+
"Australia - Eastern Standard Time (AEST) <br>"+
"United States - Chamorro Time Zone"
);

            break;
        case 4:

            var $oce4 = $("#oce4 h3").html();
            $(".modal-title").html($oce4+ " - " + "UTC +12" + " - Oceania");
            $(".modal-body h3").html("New Zealand – New Zealand Standard Time<br>"+
"Fiji <br>"
);

            break;

        case 5:

            var $south1 = $("#south1 h3").html();
            $(".modal-title").html($south1+ " - " + "UTC -5" + " - South America");
            $(".modal-body h3").html("Panama <br>"+
"Colombia - Time in Colombia <br>"+
"Ecuador - Time in Ecuador <br>"+
"Peru - Time in Peru <br>"+
"Brazil");
            break;
        case 6:

            var $south2 = $("#south2 h3").html();
            $(".modal-title").html($south2+ " - " + "UTC -4" + " - South America");
            $(".modal-body h3").html("Bolivia <br>"+
 "Brazil <br>"+
"Amazonas (except southwestern portion) <br>"+
 "Guyana <br>");

            break;
        case 7:

            var $south3 = $("#south3 h3").html();
            $(".modal-title").html($south3+ " - " + "UTC -3" + " - South America");
            $(".modal-body h3").html("Suriname <br>"+
 "French Guiana <br>"+
 "Brazil - Northern and Northeastern States <br>"+
 "Argentina <br>"+
 "Falkland Islands <br>"+
 "Uruguay <br>"+
 "Chile - Magallanes Region and Chilean Antarctic Territory");

            break;
        case 8:

            break;

        case 9:

            var $africa1 = $("#africa1 h3").html();
            $(".modal-title").html($africa1+ " - " + "UTC 0" + " - Africa");
            $(".modal-body h3").html("Burkina Faso <br>"+
"The Gambia <br>"+
"Ghana <br>"+
"Guinea <br>"+
"Guinea-Bissau <br>"+
"Côte d'Ivoire <br>"+
"Liberia <br>"+
"Mali <br>"+
"Mauritania <br>"+
"Senegal <br>"+
"Sierra Leone <br>"+
"Togo <br>");

            break;
        case 10:

            var $africa2 = $("#africa2 h3").html();
            $(".modal-title").html($africa2+ " - " + "UTC +1" + " - Africa");
            $(".modal-body h3").html("Algeria <br>"+
 "Angola <br>"+
 "Benin <br>"+
 "Cameroon <br>"+
 "Central African Republic <br>"+
 "Chad <br>"+
 "Republic of the Congo <br>"+
 "Democratic Republic of the Congo <br>"+
 "Equatorial Guinea <br>"+
 "Gabon <br>"+
 "Niger <br>"+
 "Nigeria <br>"+
 "São Tomé and Príncipe <br>"+
 "Tunisia");


            break;
        case 11:

            var $africa3 = $("#africa3 h3").html();
            $(".modal-title").html($africa3+ " - " + "UTC +3" + " - Africa");
            $(".modal-body h3").html( "Comoros <br>"+
 "Djibouti <br>"+
 "Eritrea <br>"+
 "Ethiopia <br>"+
 "Kenya <br>"+
 "Madagascar <br>"+
"Mayotte<br>"+
"Scattered Islands in the Indian Ocean <br>"+
 "Somalia <br>"+
 "South Sudan <br>"+
 "Tanzania <br>"+
 "Uganda");

            break;
        case 12:

            var $africa4 = $("#africa4 h3").html();
            $(".modal-title").html($africa4+ " - " + "UTC +2" + " - Africa");
            $(".modal-body h3").html("Egypt <br> "+
 "Libya <br>"+
 "Sudan");


            break;

        case 13:

        var $africa5 = $("#africa5 h3").html();
            $(".modal-title").html($africa5+ " - " + "UTC +2" + " - Africa");
            $(".modal-body h3").html("Botswana <br>"+
 "Burundi <br>"+
 "Democratic Republic of the Congo (eastern half) <br>"+
 "Lesotho <br>"+
 "Malawi <br>"+
 "Mozambique <br>"+
 "Namibia <br>"+
 "Rwanda <br>" +
 "South Africa <br>"+
 "Swaziland <br>"+
 "Zambia <br>"+
 "Zimbabwe");

            break;
        case 14:

            var $europe1 = $("#europe1 h3").html();
            $(".modal-title").html($europe1+ " - " + "UTC 0" + " - Europe");
            $(".modal-body h3").html( "Portugal <br>"+
 "Spain – Canary Islands only <br>"+
 "United Kingdom <br>"+
 "Ireland");

            break;
        case 15:

        var $europe2 = $("#europe2 h3").html();
            $(".modal-title").html($europe2+ " - " + "UTC 1" + " - Europe");
            $(".modal-body h3").html(  "Albania <br>"+
 "Austria <br>"+
 "Belgium <br>"+
 "Bosnia and Herzegovina <br>"+
 "Croatia <br>"+
 "Czech Republic <br>"+
 "Denmark, except Faroe Islands <br>"+
"Greenland <br>"+
 "France <br>"+
 "Germany <br>"+
 "Hungary <br>"+
 "Italy <br>"+
 "Liechtenstein <br>"+
 "Luxembourg <br>"+
 "Macedonia <br>"+
 "Malta <br>"+
 "Monaco <br>"+
 "Montenegro <br>"+
 "Netherlands <br>"+
 "Norway <br>"+
 "Poland <br>"+
 "San Marino <br>"+
 "Serbia <br>"+
 "Slovakia <br>"+
 "Slovenia <br>"+
 "Spain – except Canary Islands <br>"+
 "Sweden <br>"+
  "Switzerland"
  );

            break;
        case 16:

        var $europe3 = $("#europe3 h3").html();
            $(".modal-title").html($europe3+ " - " + "UTC +3" + " - Europe");
            $(".modal-body h3").html("Belarus <br>"+
"Russia: Moscow Time <br>"+
"Turkey");

            break;

        case 17:

        var $europe4 = $("#europe4 h3").html();
            $(".modal-title").html($europe4+ " - " + "UTC +2" + " - Europe");
            $(".modal-body h3").html("Russia - Kaliningrad Oblast <br>"+
             "Bulgaria <br>"+
 "Estonia <br>"+
 "Finland <br>"+
 "Greece <br>"+
 "Latvia <br>"+
 "Lithuania <br>"+
 "Moldova <br>"+
 "Transnistria <br>"+
 "Romania <br>"+
 "Ukraine" );

            break;
        case 18:

            break;
        case 19:

            var $north1 = $("#north1 h3").html();
            $(".modal-title").html($north1+ " - " + "UTC -3" + " - North America");
            $(".modal-body h3").html( "Greenland - West Greenland Time <br>"+
 "Saint-Pierre and Miquelon (France)" );

            break;
        case 20:

            var $north2 = $("#north2 h3").html();
            $(".modal-title").html($north2+ " - " + "UTC -6" + " - North America");
            $(".modal-body h3").html( "Canada - Centrañ Time Zone <br>"+
            "United States - Central Time Zone <br>"+
            "Mexico - Central time zone <br>");

            break;

        case 21:

            var $north3 = $("#north3 h3").html();
            $(".modal-title").html($north3+ " - " + "UTC -4" + " - North America");
            $(".modal-body h3").html("Greenland (Denmark) <br>"+
 "Canada <br>"+
"Nova Scotia, New Brunswick, Prince Edward Island, Labrador except the southeastern tip south of Black Tickle, and the easternmost portions of Quebec  <br>"+
 "Bermuda (UK)");

            break;
        case 22:

        var $north4 = $("#north4 h3").html();
            $(".modal-title").html($north4+ " - " + "UTC -5" + " - North America");
            $(".modal-body h3").html( "Canada - Eastern Time Zone <br>"+
            "United States - Eastern Time Zone");

            break;
        case 23:

            var $north5 = $("#north5 h3").html();
            $(".modal-title").html($north5+ " - " + "UTC -7" + " - North America");
            $(".modal-body h3").html( "Canada - Mountain Time Zone <br>"+
            "United States - Mountain Time Zone <br>"+
            "Mexico - Pacific Zone");

            break;
        case 24:

            var $north6 = $("#north6 h3").html();
            $(".modal-title").html($north6+ " - " + "UTC -8" + " - North America");
            $(".modal-body h3").html( "Canada - Pacific Time Zone <br>"+
            "United States - Pacific Time Zone <br>"+
            "Mexico - Northwest Zone");

            break;

        case 25:

            var $north7 = $("#north7 h3").html();
            $(".modal-title").html($north7+ " - " + "UTC -9" + " - North America");
            $(".modal-body h3").html( "United States - Alaska Time Zone");

            break;
        case 26:

            var $asia1 = $("#asia1 h3").html();
            $(".modal-title").html($asia1+ " - " + "UTC +12" + " - Asia");
            $(".modal-body h3").html( "Russia - Kamchatka Time");

            break;
        case 27:

            var $asia2 = $("#asia2 h3").html();
            $(".modal-title").html($asia2+ " - " + "UTC +10" + " - Asia");
            $(".modal-body h3").html( "Russia - Vladivostok Time");

            break;

         case 28:

            var $asia3 = $("#asia3 h3").html();
            $(".modal-title").html($asia3+ " - " + "UTC +9" + " - Asia");
            $(".modal-body h3").html( "Russia - Yakutsk Time <br>"+
                 "Japan<br>"+
                  "North Korea<br>"+
                   "South Korea<br>"+
                    "Indonesia (eastern) <br>"+
                    "East Timor"
            );



            break;

        case 29:

        var $asia4 = $("#asia4 h3").html();
            $(".modal-title").html($asia4+ " - " + "UTC +8" + " - Asia");
            $(".modal-body h3").html( "Russia - Irkutsk Time <br>"+
            "China <br>"+
            "Hong Kong <br>"+
            "Macau <br>"+
            "Mongolia <br>"+
            "Taiwan <br>"+
            "Philippines <br>"+
            "Brunei <br>"+
            "Malasya <br>"+
            "Singapore <br>"+
            "Indonesia - Indonesia Central Time <br>"
            );


            break;
        case 30:

            break;
        case 31:

             var $asia6 = $("#asia6 h3").html();
            $(".modal-title").html($asia6+ " - " + "UTC +6" + " - Asia");
            $(".modal-body h3").html( "Russia - Omsk Time <br>"+
            "Kazakhstan  <br>"+
            "Kyrgyzstan  <br>"+
            "PRC - Xinjiang Time <br>"+
            "Bangladesh  <br>"+
            "Bhutan"
             );

            break;
        case 32:

            var $asia7 = $("#asia7 h3").html();
            $(".modal-title").html($asia7+ " - " + "UTC +3" + " - Asia");
            $(".modal-body h3").html(
               "Bahrain <br>"+
               "Iraq <br>"+
               "Kuwait <br>"+
               "Qatar <br>"+
               "Saudi Arabia <br>"+
               "Yemen"
             );

            break;

        case 33:

            var $asia8 = $("#asia8 h3").html();
            $(".modal-title").html($asia10+ " - " + "UTC +5" + " - Asia");
            $(".modal-body h3").html(
            "Russia - Yekaterinburg Time <br>"+
            "Kazakhstan (western part)  <br>"+
            "Uzbekistan <br>"+
            " Tajikistan <br>"+
            "Turkmenistan <br>"+
            "Pakistan <br>"+
            "Maldives"
             );

            break;
        case 34:

            break;
        case 35:

            var $asia10 = $("#asia10 h3").html();
            $(".modal-title").html($asia10+ " - " + "UTC +7" + " - Asia");
            $(".modal-body h3").html(
            " Russia - Krasnoyarsk Time <br>"+
            " Mongolia (western part) <br>"+
            " Vietnam <br>"+
            " Laos <br>"+
            " Thailand <br>"+
            "  Indonesia - Indonesia Western Time <br>"
             );

            break;
        case 36:

            break;

        case 37:

            var $asia12 = $("#asia12 h3").html();
            $(".modal-title").html($asia12+ " - " + "UTC +4" + " - Asia");
            $(".modal-body h3").html(
            "Oman <br>"+
            " United Arab Emirates "
             );

            break;
    }


    }