from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import InvestmentAccount, Transaction

@api_view(['POST'])
def create_account(request):
    account = InvestmentAccount.objects.create(
        user=request.user,
        account_type=request.data['type'],
        balance=0.0
    )
    return Response({'status': 'success', 'account_id': account.id})

@api_view(['POST'])
def buy_asset(request):
    # Handle fractional purchases
    Transaction.objects.create(
        user=request.user,
        asset=request.data['symbol'],
        amount=request.data['amount'],
        is_fractional=request.data.get('is_fractional', False)
    )
    return Response({'status': 'order_placed'})