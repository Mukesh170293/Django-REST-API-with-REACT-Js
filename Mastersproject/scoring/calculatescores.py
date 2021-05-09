from scoring.models import JudgeAssignment, Project
from statistics import mean
from django.shortcuts import render

def calaveragescore():
    donelist = []
    jas = list(JudgeAssignment.objects.all())
    for ja in jas:
        if ja.ProjectId not in done_list:
            score = 0
            done_list.append(ja.ProjectId)
            project = JudgeAssignment.objects.filter(ProjectId = ja.ProjectId.ProjectId)
            if len(list(project)) < 2:
                continue

            for p in project:
                score = score + p.RawScore                        
            avgscore = score / len(list(project))
            project = Project.objects.get(ProjectId = ja.ProjectId.ProjectId)
            project.AvgScore = avgscore
            project.save()

def calavg01():
    projects = list(Project.objects.all())
    for project in projects:
        jas = JudgeAssignment.objects.filter(ProjectId = project.ProjectId)
        alljudgezranks = []
        for ja in jas:
            if ja.RawScore != 0:
                alljudgezranks.append(ja.Rank)
        if len(alljudgezranks) < 2:
            continue
        project.Avg_01 = mean(alljudgezranks)
        project.save()

def calavgzscore():
    projects = list(Project.objects.all())
    for project in projects:
        jaszscore = list(JudgeAssignment.objects.filter(ProjectId = project.ProjectId).values_list('Zscore', flat=True))
        notnonescores = [i for i in jaszscore if i is not None]
        if len(notnonescores) < 2:
            continue
        project.Zscore = mean(notnonescores)
        project.save()


def calisefscore():
    projects = list(Project.objects.all())
    for project in projects:
        if project.ScaledScore is None or project.ScaledRank is None or project.Scaledz is None:
            continue
        project.IsefScore = (project.ScaledScore + project.ScaledRank + project.Scaledz) - 50
        project.save()



def calrawscore():
    jas = list(JudgeAssignment.objects.all())
    for ja in jas:
        if ja.GoalScore != 0 and ja.PlanScore != 0 and ja.ActionScore != 0 and ja.ResultAnalysisScore != 0 and ja.CommunicationScore != 0:
            ja.RawScore = ja.GoalScore + ja.PlanScore + ja.ActionScore + ja.ResultAnalysisScore + ja.CommunicationScore
            ja.save()


def calscaledrank():
    projects = list(Project.objects.all())
    for index in range(len(projects)):
        min = list(Project.objects.all().order_by('Avg_01'))[index].Avg_01
        if min is not None:
            break
    for index in range(len(projects)):
        max = list(Project.objects.all().order_by('-Avg_01'))[index].Avg_01
        if max is not None:
            break
    if max is None or min is None:
        return
    rangevalue = max - min

    for project in projects:
        if project.Avg_01Rank is None or rangevalue == 0:
            continue
        project.ScaledRank = ((project.Avg_01 - min)/rangevalue)*25 + 25
        project.save()


def calscaledscore():
    projects = list(Project.objects.all())
    for index in range(len(projects)):
        min = list(Project.objects.all().order_by('AvgScore'))[index].AvgScore
        if min is not None:
            break
    for index in range(len(projects)):
        max = list(Project.objects.all().order_by('-AvgScore'))[index].AvgScore
        if max is not None:
            break
    rangevalue = max - min
    if rangevalue == 0:
        return
    for project in projects:
        if project.AvgScore is None:
            continue
        project.ScaledScore = ((project.AvgScore - min)/rangevalue)*25 + 25
        project.save()


def calscaledzscore():
    projects = list(Project.objects.all())
    for index in range(len(projects)):
        min = list(Project.objects.all().order_by('Zscore'))[index].Zscore
        break
    for index in range(len(projects)):
        max = list(Project.objects.all().order_by('-Zscore'))[index].Zscore
        if max is not None:
            break
    if max is None or min is None:
         return
    rangevalue = max - min
    for project in projects:
        if project.Zscore is None:
            continue
        project.Scaledz = ((project.Zscore - min)/rangevalue)*25 + 25
        project.save()


def calzscore():
    jas = list(JudgeAssignment.objects.all())
    for ja in jas:
        jasprojects = list(JudgeAssignment.objects.filter(JudgeId = ja.JudgeId))
        alljudgescores = []
        for jasproject in jasprojects:
            if jasproject.RawScore != 0:
                alljudgescores.append(jasproject.RawScore)
        if len(alljudgescores) < 2 :
            continue
        if stdev(alljudgescores) > 0:
            ja.Zscore = (ja.RawScore - mean(alljudgescores))/stdev(alljudgescores)
            ja.save()

def sortavg01rank():
    rank = 1
    projects = list(Project.objects.all().order_by('-Avg_01'))
    for index in range(len(projects)):
        if projects[index].Avg_01 is not None:
            projects[index].Avg_01Rank = rank
            rank = rank + 1
            if index > 0 and projects[index].Avg_01 == projects[index-1].Avg_01:
                projects[index].Avg_01Rank  = projects[index-1].Avg_01Rank 
            projects[index].save()

def sortcategoryrank():
    projects = list(Project.objects.all().order_by('ProjectCategory', '-IsefScore'))
    rank = 1
    for index in range(len(projects)):
        if index >= 0 and projects[index].ProjectCategory != projects[index-1].ProjectCategory:
            rank = 1
        projects[index].CategoryRank = rank
        if projects[index].IsefScore is not None:
            if index > 0 and projects[index].IsefScore == projects[index-1].IsefScore:
                if projects[index].ProjectCategory == projects[index-1].ProjectCategory:
                    projects[index].CategoryRank = projects[index-1].CategoryRank
            rank = rank + 1
            projects[index].save()


def sortisefrank():
    rank = 1
    projects = list(Project.objects.all().order_by('-IsefScore'))
    for index in range(len(projects)):
        if projects[index].IsefScore is not None:

            projects[index].IsefScore = rank
            # print(rank)

            rank = rank + 1
            if index > 0 and projects[index].IsefScore == projects[index-1].IsefScore:
                projects[index].IsefScore = projects[index-1].IsefScore
            projects[index].FairRank = projects[index].IsefRank
            projects[index].save()


def sortjudgerank():
    judges = list(Judge.objects.all())
    for judge in judges:
        jas = list(JudgeAssignment.objects.filter(JudgeId = judge.JudgeId).order_by('-RawScore'))
        if len(jas) < 2:
            continue
        for index in range(len(jas)):
            if jas[index].RawScore is None:
                continue
            jas[index].Rank = (1-(1/(len(jas)-1))*index)
            if index > 0 and (jas[index].RawScore == jas[index-1].RawScore):
                jas[index].Rank = jas[index-1].Rank
            jas[index].save()


def sortrank():
    rank = 1
    projects = list(Project.objects.all().order_by('-AvgScore'))
    for index in range(len(projects)):
        if isinstance(projects[index].AvgScore,float):
            projects[index].Rank = rank
            rank = rank + 1
            if index > 0 and projects[index].AvgScore == projects[index-1].AvgScore:
                projects[index].Rank = projects[index-1].Rank
            projects[index].save()

def sortzscorerank():
    rank = 1
    projects = list(Project.objects.all().order_by('-Zscore'))
    for index in range(len(projects)):
        if projects[index].Zscore is not None:
            projects[index].ZscoreRank = rank
            rank = rank + 1
            if index > 0 and projects[index].Zscore == projects[index-1].Zscore:
                projects[index].ZscoreRank = projects[index-1].ZscoreRank
            projects[index].save()


def update_scores():
    calrawscore()
    calaveragescore()
    sortrank()
    calzscore()
    sortjudgerank()
    calavgzscore()
    sortzscorerank()
    calavg01()
    sortavg01rank()
    calscaledscore()
    calscaledzscore()
    calscaledrank()
    calisefscore()
    sortisefrank()
    sortcategoryrank()
    print("gdsgd")


def calculate_scores(request):
    calrawscore()
    calaveragescore()
    sortrank()
    calzscore()
    sortjudgerank()
    calavgzscore()
    sortzscorerank()
    calavg01()
    sortavg01rank()
    calscaledscore()
    calscaledzscore()
    calscaledrank()
    calisefscore()
    sortisefrank()
    sortcategoryrank()
    print("Ddddddfdf")
    return render(request, 'home.html')



