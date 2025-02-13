const [roundUpAmount, setRoundUpAmount] = useState(45.00);

<TouchableOpacity style={styles.roundUpCard}>
  <Text style={{ color: '#FFF' }}>Round-Up Savings</Text>
  <Text style={{ color: '#8641F4', fontSize: 20 }}>${roundUpAmount}</Text>
  <Text style={{ color: '#FFF' }}>This month's spare change</Text>
</TouchableOpacity>
