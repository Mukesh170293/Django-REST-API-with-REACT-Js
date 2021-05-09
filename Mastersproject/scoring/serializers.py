from .models import JudgeAssignment,Judge,Project,Student
from rest_framework import serializers
from .views import *
from django.forms import widgets



class JudgeAssignmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = JudgeAssignment
        fields = '__all__'


class JudgeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Judge
        fields = ['JudgeId','Name','NoShow']

class JudgedisplaySerializer(serializers.ModelSerializer):
    projects_assigned = serializers.SerializerMethodField(method_name='calculate_projects_assigned')
    graded = serializers.SerializerMethodField(method_name='calculate_graded')
    projects_assigned_half = serializers.SerializerMethodField(method_name='calculate_projects_assigned_half')
    class Meta:
        model = Judge
        fields = ['JudgeId','Name','projects_assigned','graded','projects_assigned_half']

    def calculate_projects_assigned(self, instance):
        return instance['projects_assigned']

    def calculate_graded(self, instance):
        return instance['graded']

    def calculate_projects_assigned_half(self, instance):
        return instance['projects_assigned_half']


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'

class ProjectdisplaySerializer(serializers.ModelSerializer):
    judges_assigned = serializers.SerializerMethodField(method_name='calculate_judges_assigned')
    graded = serializers.SerializerMethodField(method_name='calculate_graded')
    judges_assigned_half = serializers.SerializerMethodField(method_name='calculate_judges_assigned_half')
    class Meta:
        model = Project
        fields = ["ProjectId","TableId","Description","ProjectTitle","ProjectCategory","AvgScore","Rank","Zscore","ZscoreRank","Avg_01","Avg_01Rank","ScaledScore","ScaledRank","Scaledz","IsefScore","IsefRank","CategoryRank","FairRank","judges_assigned","graded","judges_assigned_half"]

    def calculate_judges_assigned(self, instance):
        return instance['judges_assigned']

    def calculate_graded(self, instance):
        return instance['graded']

    def calculate_judges_assigned_half(self, instance):
        return instance['judges_assigned_half']

class display_top_projects_Serializer(serializers.ModelSerializer):
    student_names = serializers.SerializerMethodField(method_name='calculate_student_names')
    class Meta:
        model = Project
        fields = ["ProjectId","ProjectTitle","ProjectCategory","CategoryRank","FairRank","student_names"]
    
    def calculate_student_names(self, instance):
        return instance['student_names']

    

class UnassignProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['ProjectId','ProjectTitle']

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ['Id','School','ProjectId']


   
