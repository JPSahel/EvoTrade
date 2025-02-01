from rest_framework import serializers
from .models import InvestmentAccount, Transaction, SocialPost

class InvestmentAccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = InvestmentAccount
        fields = '__all__'

class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = '__all__'

class SocialPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = SocialPost
        fields = '__all__'