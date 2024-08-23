import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Plans() {
  const plans = [
    {
      title: 'Mensualidad',
      description: 'El plan más completo para alcanzar tus objetivos con prácticas libres y clases grupales.',
      price: '50000',
      buttonText: 'Comprar',
    },
    {
      title: 'Trimestre',
      description: '11 prácticas libres en nuestros gimnasios para que puedas entrenar con la flexibilidad que necesites.',
      price: '130000',
      buttonText: 'Comprar',
    },
    {
      title: 'Semestre',
      description: 'Ejercítate junto a tu partner y logren juntos la meta esperada.',
      price: '280000',
      buttonText: 'Comprar',
    },
    {
      title: 'Año',
      description: 'El plan más completo para alcanzar tus objetivos con prácticas libres y clases grupales.',
      price: '550000',
      buttonText: 'Comprar',
    },
  ];

  return (
    <View>
      {plans.map((plan, index) => (
        <View key={index} style={{ marginVertical: 8, padding: 16, backgroundColor: '#f0f0f0' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{plan.title}</Text>
          <Text>{plan.description}</Text>
          <Text style={{ marginVertical: 8, fontSize: 16, fontWeight: 'bold' }}>Desde {plan.price}</Text>
          <Button title={plan.buttonText} onPress={() => {/* Aquí puedes manejar la compra */}} />
        </View>
      ))}
    </View>
  );
}
