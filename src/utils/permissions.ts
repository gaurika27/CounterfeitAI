export const hasPermission = (userRole: string, requiredRole: string): boolean => {
  const roleHierarchy: { [key: string]: number } = {
    'Legal Team': 3,
    'Brand Owner': 2,
    'Moderator': 1
  };
  
  return roleHierarchy[userRole] >= roleHierarchy[requiredRole];
};