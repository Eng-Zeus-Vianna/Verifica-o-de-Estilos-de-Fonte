<? versão xml  ="1.0"?>
<nome do ruleset ="Outubro CMS" >
    <descrição>O padrão de codificação para O CMS de outubro</descrição>
    <ref de regra ="PSR2" >
        <excluir nome="PSR1. Métodos.CamelCapsMethodName.NotCamelCaps"  />
        <excluir nome="Squiz.ControlStructures.ControlSignature.SpaceAfterCloseBrace"  />
        <excluir nome="PSR2. ControlStructures.ControlStructureSpacing.SpacingAfterOpenBrace"  />
    <regra></regra>

    <regra árbitro= "PSR1. Classes.ClassDeclaration.MultipleClasses" >
        <!--
 Os aparelhos e os casos de teste podem ter várias classes definidas, somente se estiverem diretamente relacionados ao teste, ou forem
 aulas estendidas
        -->
        <exclusão padrão>*/testes/*</padrão de exclusão>
    </regra>

    <arquivo>src/</arquivo>
    <arquivo>testes/</arquivo>

    <!-- Ignorar arquivos de fornecedores -- >
    <>/fornecedor/**</excludente>
</ruleset>