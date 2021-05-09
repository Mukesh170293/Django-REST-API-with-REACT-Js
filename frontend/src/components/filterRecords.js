
var filterRecord = {
    init: function(){
            var tableBody =  document.getElementsByTagName('tbody')[0];
            var initalRows = [];
            Object.assign(initalRows, tableBody.rows)
    
            var searchByStudentId = document.getElementById('searchByStudentId');
            if(searchByStudentId != null){
            searchByStudentId.addEventListener('keyup', function(){
                newrows = [];
                for (var i=0; i<initalRows.length; i++) {
                  if(initalRows[i].cells[0].innerText.indexOf(searchByStudentId.value) !== -1
                    || searchByStudentId.value == ""){
                            newrows[newrows.length] = initalRows[i];
                        }
                }
                while (tableBody.firstChild) {
                   tableBody.firstChild.remove();
                }
    
                for (var i=newrows.length-1; i>=0; i--) {
                   tableBody.appendChild(newrows[i]);
                }
    
                delete newrows;
            });
          }
    
    
            var searchByJudgeId = document.getElementById('searchByJudgeId');
           if(searchByJudgeId != null){
             searchByJudgeId.addEventListener('keyup', function(){
                newrows = [];
                for (var i=0; i<initalRows.length; i++) {
                  if(initalRows[i].cells[0].innerText.indexOf(searchByJudgeId.value) !== -1
                    || searchByJudgeId.value == ""){
                            newrows[newrows.length] = initalRows[i];
                        }
                }
                while (tableBody.firstChild) {
                   tableBody.firstChild.remove();
                }
    
                for (var i=newrows.length-1; i>=0; i--) {
                   tableBody.appendChild(newrows[i]);
                }
    
                delete newrows;
            });
        }
    
    
            var searchByProjectId = document.getElementById('searchByProjectId');
            if(searchByProjectId != null){
            searchByProjectId.addEventListener('keyup', function(){
                newrows = [];
                for (var i=0; i<initalRows.length; i++) {
                  if(initalRows[i].cells[0].innerText.indexOf(searchByProjectId.value) !== -1
                    || searchByProjectId.value == ""){
                            newrows[newrows.length] = initalRows[i];
                        }
                }
                while (tableBody.firstChild) {
                   tableBody.firstChild.remove();
                }
    
                for (var i=newrows.length-1; i>=0; i--) {
                   tableBody.appendChild(newrows[i]);
                }
    
                delete newrows;
            });
        }
    
        var searchByJudge_Id = document.getElementById('searchByJudge_Id');
        if(searchByJudge_Id != null){
         searchByJudge_Id.addEventListener('keyup', function(){
            newrows = [];
            for (var i=0; i<initalRows.length; i++) {
              if(initalRows[i].cells[1].innerText.indexOf(searchByJudge_Id.value) !== -1
                || searchByJudge_Id.value == ""){
                        newrows[newrows.length] = initalRows[i];
                    }
            }
            while (tableBody.firstChild) {
               tableBody.firstChild.remove();
            }
    
            for (var i=newrows.length-1; i>=0; i--) {
               tableBody.appendChild(newrows[i]);
            }
    
            delete newrows;
        });
        }
    
        var searchByProject_Id = document.getElementById('searchByProject_Id');
        if(searchByProject_Id != null){
         searchByProject_Id.addEventListener('keyup', function(){
            newrows = [];
            for (var i=0; i<initalRows.length; i++) {
              if(initalRows[i].cells[2].innerText.indexOf(searchByProject_Id.value) !== -1
                || searchByProject_Id.value == ""){
                        newrows[newrows.length] = initalRows[i];
                    }
            }
            while (tableBody.firstChild) {
               tableBody.firstChild.remove();
            }
    
            for (var i=newrows.length-1; i>=0; i--) {
               tableBody.appendChild(newrows[i]);
            }
    
            delete newrows;
        });
        }
    
    }
    }
    
    window.onload = filterRecord.init;
    