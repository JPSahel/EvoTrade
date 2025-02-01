from django.db import models
from django.contrib.auth.models import User

class InvestmentAccount(models.Model):
    ACCOUNT_TYPES = [
        ('TFSA', 'Tax-Free'),
        ('RRSP', 'Retirement'),
        ('NON_REG', 'Non-Registered')
    ]
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    account_type = models.CharField(max_length=10, choices=ACCOUNT_TYPES)
    balance = models.FloatField(default=0.0)

class Transaction(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    asset = models.CharField(max_length=10)  # BTC, TSLA, etc.
    amount = models.FloatField()
    is_fractional = models.BooleanField(default=False)
    timestamp = models.DateTimeField(auto_now_add=True)

class SocialPost(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    performance = models.FloatField()  # +15%
    timestamp = models.DateTimeField(auto_now_add=True)
    

class Achievement(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    badge = models.CharField(max_length=20)  # e.g., 'First Trade'
    unlocked_at = models.DateTimeField(auto_now_add=True)
