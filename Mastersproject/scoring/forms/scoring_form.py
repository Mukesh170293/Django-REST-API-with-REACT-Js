from django.forms import ModelForm
from scoring.models import JudgeAssignment
from scoring.calculatescores import update_scores


class ScoringForm(ModelForm):
    class Meta:
        model = JudgeAssignment
        fields = ['ProjectId', 'JudgeId', 'GoalScore',
                  'PlanScore', 'ActionScore', 'ResultAnalysisScore',
                  'CommunicationScore', 'RawScore']

    def save(self, commit=True):

        ja = super(ScoringForm, self).save(commit=False)

        ja.goal_score = self.cleaned_data['GoalScore']
        ja.plan_score = self.cleaned_data['PlanScore']
        ja.action_score = self.cleaned_data['ActionScore']
        ja.result_analysis_score = self.cleaned_data['ResultAnalysisScore']
        ja.communication_score = self.cleaned_data['CommunicationScore']
        ja.raw_score = self.cleaned_data['RawScore']
        exja = Judge_Assignment.objects.get(ProjectId=ja.ProjectId,
                                            JudgeId=ja.JudgeId,)

        ja.JaId = exja.JaId
        if commit:
            ja.save()
            update_scores()

        return ja
