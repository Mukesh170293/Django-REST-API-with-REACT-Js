from django.db import models

class Judge(models.Model):
    JudgeId = models.CharField(primary_key=True, max_length=5)
    Name = models.CharField(max_length=10)
    NoShow = models.BooleanField(default=False)

    def __str__(self):
        return '%s' % self.JudgeId
        # to return a human-readable string for each object


class Project(models.Model):
    ProjectId = models.CharField(primary_key=True, max_length=6)
    TableId = models.IntegerField(null=True)
    Description = models.CharField(max_length=1000, null=True)
    ProjectTitle = models.CharField(max_length=500)
    ProjectCategory = models.CharField(max_length=100)
    AvgScore = models.FloatField(null=True)
    Rank = models.IntegerField(null=True)
    Zscore = models.FloatField(null=True)
    ZscoreRank = models.IntegerField(null=True)
    Avg_01 = models.FloatField(null=True)
    Avg_01Rank = models.IntegerField(null=True)
    ScaledScore = models.FloatField(null=True)
    ScaledRank = models.FloatField(null=True)
    Scaledz = models.FloatField(null=True)
    IsefScore = models.FloatField(null=True)
    IsefRank = models.IntegerField(null=True)
    CategoryRank = models.IntegerField(null=True)
    FairRank = models.IntegerField(null=True)
    NoShow = models.BooleanField(default=False)

    def __str__(self):
        return self.ProjectId   

    
class Student(models.Model):
    Id = models.CharField(max_length=30, primary_key=True)
    # first_name = models.CharField()
    # last_name = models.CharField()
    # full_name = models.CharField(max_length = 300)
    School = models.CharField(max_length=100)
    ProjectId = models.ForeignKey(Project, to_field='ProjectId', on_delete=models.CASCADE)


class JudgeAssignment(models.Model):
    JaId = models.IntegerField(primary_key=True)
    JudgeId = models.ForeignKey(Judge, on_delete=models.CASCADE)
    ProjectId = models.ForeignKey(Project, on_delete=models.CASCADE)
    GoalScore = models.IntegerField(null=True)
    PlanScore = models.IntegerField(null=True)
    ActionScore = models.IntegerField(null=True)
    ResultAnalysisScore = models.IntegerField(null=True)
    CommunicationScore = models.IntegerField(null=True)
    RawScore = models.IntegerField(null=True)
    Zscore = models.FloatField(null=True)
    Rank = models.FloatField(null=True)

    def __str__(self):
        return self.JudgeId.JudgeId + " " + self.ProjectId.ProjectId
        # This method returns the string representation of the object.
    