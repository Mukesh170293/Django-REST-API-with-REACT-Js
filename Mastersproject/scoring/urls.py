from django.urls import path, re_path
from .views import *

urlpatterns = [
    path('display_judges/', display_judges),
    path('display_students/', display_students),
    path('display_judge_assignments/', display_judge_assignments),
    path('displayprojects/', displayprojects),
    path('remove_all_data/', remove_all_data),
    path('deletejudgeassignment/<str:pk>/', deletejudgeassignment),
    path('deleteprojectassignment/<str:pk>/', deleteprojectassignment),
    path('removeassignedprojectassignments/', removeassignedprojectassignments),
    path('removeassignedjudgeassignments/', removeassignedjudgeassignments),
    path('display_top_projects/', display_top_projects),
    path('export_judge_assignment/', export_judge_assignment),
    path('export_project/', export_project),
    path('import_file/', import_file),
    path('add_score/',add_score),
    path('import_file_upload/',import_file_upload),
    
    
]


