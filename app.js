$(document).ready(function(){
   var tripDetails= {
        "running_trips":
        [{
                "trip_info": {
                    "tripcard": "SIMULATOR_TRIP_RFID_DD6c510",
                    "trip_status": "1",
                    "driver_name": "Ragavan",
                    "driver_no": "8870405740",
                    "route_name": "Karapattu-School",
                    "route_id": "85"
                },
                "stops": 
                [{
                    "id": "86",
                    "busstop_nm": "St. Antony's Matriculation School",
                    "lat": "12.379325",
                    "lng": "78.949457"
                }, {
                    "id": "100",
                    "busstop_nm": "Pudupattu",
                    "lat": "12.376803",
                    "lng": "78.94137"
                }, {
                    "id": "98",
                    "busstop_nm": "Karapattu",
                    "lat": "12.380733",
                    "lng": "78.93094569999994"
                }, {
                    "id": "101",
                    "busstop_nm": "St. Antony's Matriculation School-End",
                    "lat": "12.379325",
                    "lng": "78.949457"
                }]       
        }],
        "pending_trips": [{
            "trip_info": {
                "tripcard": "SIMULATOR_TRIP_RFID_DD7c790",
                "trip_status": "1",
                "driver_name": "Saravanan",
                "driver_no": "8870467768",
                "route_id": "68",
                "route_name": "Orbmix - MR School"
            },
            "stops": 
            [{
                "id": "57",
                "busstop_nm": "Orbmix",
                "lat": "12.976367838212482",
                "lng": "80.20175099372864"
            },{
                "id": "58",
                "busstop_nm": "Adambakkam",
                "lat": "12.982969989109305",
                "lng": "80.19642949104309"
            }, {
                "id": "67",
                "busstop_nm": "Kamarajar Road",
                "lat": "13.05530508961962",
                "lng": "80.18295407295227"
            }, {
                "id": "66",
                "busstop_nm": "Indira Gandhi Road",
                "lat": "13.050371921898373",
                "lng": "80.18299698829651"
            }, {
                "id": "65",
                "busstop_nm": "Aavin Junction",
                "lat": "13.044748826759387",
                "lng": "80.18596887588501"
            }]
        }] 
    };
    // RUNNING TRIP DETAILS
    // console
    var trip_detail,runningTrip_details,runningTripInfo,runningTripStop,runTripStopDetail;
    trip_details=JSON.parse(JSON.stringify(tripDetails));
    runningTripInfo=trip_details.running_trips[0].trip_info;
    runningTripStop=trip_details.running_trips[0].stops;
    runningTripDetail="<tbody><tr><th>"+"Details"+"</th>";
    runningTripDetail+="<td>"+runningTripInfo.route_id+"</td>";
    runningTripDetail+="<td>"+runningTripInfo.route_name+"</td>";
    runningTripDetail+="<td>"+runningTripInfo.tripcard+"</td>";
    runningTripDetail+="<td>"+runningTripInfo.driver_name+"</td>";
    runningTripDetail+="<td>"+runningTripInfo.driver_no+"</td>";
    runningTripDetail+="<td>"+runningTripInfo.trip_status+"</td></tr></tbody>";
    $(".tableRunInfo").append(runningTripDetail);
    // console.log(runningTrip);
    // console.log(runningTripStop[0]);

    for(i=0; i<runningTripStop.length; i++){
        runTripStopDetail="<tbody><tr><td>"+runningTripStop[i].id+"</td>";
        runTripStopDetail+="<td>"+runningTripStop[i].busstop_nm+"</td>";
        runTripStopDetail+="<td>"+runningTripStop[i].lat+"</td>";
        runTripStopDetail+="<td>"+runningTripStop[i].lng+"</td></tr></tbody>";
        $(".tableRunStop").append(runTripStopDetail);

    }
    // PENDING TRIP DETAIL
    var pendingTripDetail,pendingTripInfo,pendingTripStop,pendingStopDetail;
    pendingTripInfo=trip_details.pending_trips[0].trip_info;
    pendingTripStop=trip_details.pending_trips[0].stops;
    pendingTripDetail="<tr><td>"+pendingTripInfo.route_id+"</td>";
    pendingTripDetail+="<td>"+pendingTripInfo.route_name+"</td>";
    pendingTripDetail+="<td>"+pendingTripInfo.tripcard+"</td>";
    pendingTripDetail+="<td>"+pendingTripInfo.driver_name+"</td>";
    pendingTripDetail+="<td>"+pendingTripInfo.driver_no+"</td>";
    pendingTripDetail+="<td>"+pendingTripInfo.trip_status+"</td></tr>";
    $(".tablependInfo").append(pendingTripDetail);

    for(i=0; i<pendingTripStop.length; i++){
        pendingStopDetail="<tr><td>"+pendingTripStop[i].id+"</td>";
        pendingStopDetail+="<td>"+pendingTripStop[i].busstop_nm+"</td>";
        pendingStopDetail+="<td>"+pendingTripStop[i].lat+"</td>";
        pendingStopDetail+="<td>"+pendingTripStop[i].lng+"</td></tr>";
        $(".tablePendStop").append(pendingStopDetail);

    }
});