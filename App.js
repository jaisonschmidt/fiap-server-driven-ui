import React, { useEffect, useState } from 'react';
import { View, Text, Button, Alert, ScrollView  } from 'react-native';

import { getMockSchema } from "./mockInterface";

export default function App() {
  const [uiSchema, setUiSchema] = useState(null);

  useEffect(() => {
    // Simulando requisição ao servidor
    const fetchUI = async () => {
      // const response = await fetch('URL SEU SERVIDOR');
      const data = await getMockSchema(); // substituir por `await response.json()` no mundo real
      setUiSchema(data);
    };

    fetchUI();
  }, []);

  const renderComponent = (element, index) => {
    switch (element.type) {
      case 'Text':
        return (
          <Text key={index} style={{ fontSize: 18, marginBottom: 10 }}>
            {element.props.text}
          </Text>
        );
      case 'Button':
        return (
          <Button
            key={index}
            title={element.props.title}
            onPress={() => Alert.alert('Você clicou no botão!')}
          />
        );
      case 'View':
        return (
          <View key={index} style={{ padding: 20 }}>
            {element.children?.map(renderComponent)}
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, paddingTop: 50 }}>
      {uiSchema ? renderComponent(uiSchema) : <Text>Carregando interface...</Text>}
    </ScrollView>
  );
}
